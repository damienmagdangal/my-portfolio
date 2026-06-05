---
title: "Exploiting React Server Components: CVE-[REDACTED] Writeup (HTB Reactor)"
date: "2026-05-20"
tags: ["htb", "web-exploitation", "writeup"]
description: "Walkthrough of HackTheBox Reactor — [REDACTED] protocol deserialization RCE via [REDACTED], out-of-band exfiltration, and Node.js debugger privesc via SSH port forwarding."
slug: "htb-reactor"
---

## Overview

**Machine:** Reactor  
**Difficulty:** Medium  
**OS:** Linux  
**Key CVE:** CVE-[REDACTED]

This machine involved exploiting a deserialization vulnerability in React Server Components via the React Flight protocol, achieving RCE, exfiltrating data out-of-band via HTTP callback, and escalating privileges using the Node.js `--inspect` debugger via SSH port forwarding.

## Enumeration

> Full writeup coming soon. 

## Foothold — CVE-[REDACTED]

> Details redacted pending full writeup publication.

## Privilege Escalation — Node.js Debugger

> Details redacted pending full writeup publication.

## Lessons Learned

- React Server Components deserialization is an emerging and underexplored attack surface.
- Always check for exposed Node.js debug ports on non-standard local ports.
- SSH local port forwarding can unlock internal services that appear unexploitable remotely.
