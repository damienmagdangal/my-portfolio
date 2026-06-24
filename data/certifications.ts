export type Cert = {
  name: string;
  issuer: string;
  date: string;
  status: "completed" | "in-progress";
  credentialUrl: string;
};

export const certifications: Cert[] = [
  {
    name: "Certified Purple Team Fundamentals",
    issuer: "CyberWarfare Labs",
    date: "June 2026",
    status: "completed",
    credentialUrl: "https://labs.cyberwarfare.live/credential/achievement/6a3a5aecbfb48daa5ad17665",
  },
  {
    name: "Certified Blue Team Fundamentals",
    issuer: "CyberWarfare Labs",
    date: "June 2026",
    status: "completed",
    credentialUrl: "https://labs.cyberwarfare.live/credential/achievement/6a3907aac062f334ce457e5e",
  },
  {
    name: "Certified Multi-Cloud Red Team Analyst (MCRTA)",
    issuer: "CyberWarfare Labs",
    date: "April 2026",
    status: "completed",
    credentialUrl: "https://labs.cyberwarfare.live/credential/achievement/69db685cf365a7369821da2b",
  },
  {
    name: "Azure Cloud Foundations (AZ-900 aligned)",
    issuer: "BlackStride Cyber",
    date: "May 2026",
    status: "completed",
    credentialUrl:
      "https://credsverse.com/credentials/3544811c-6042-4e1d-b66b-db65c4bd69dc",
  },
  {
    name: "Certified Red Team Analyst (CRTA)",
    issuer: "CyberWarfare Labs",
    date: "March 2026",
    status: "completed",
    credentialUrl: "https://labs.cyberwarfare.live/credential/achievement/69a4148e9359f169cf5d8537",
  },
  {
    name: "Certified Web Red Team Analyst (WEB-RTA)",
    issuer: "CyberWarfare Labs",
    date: "February 2026",
    status: "completed",
    credentialUrl: "https://labs.cyberwarfare.live/credential/achievement/6984352d398414f740f27e69",
  },
  {
    name: "Certified Cybersecurity Analyst (C3SA)",
    issuer: "CyberWarfare Labs",
    date: "January 2026",
    status: "completed",
    credentialUrl: "https://labs.cyberwarfare.live/credential/achievement/697ac8d0fbb79ac75856af37",
  },
  {
    name: "API Penetration Testing",
    issuer: "APISec University",
    date: "November 2025",
    status: "completed",
    credentialUrl: "https://www.credly.com/badges/1d066d3b-c1e2-462a-8807-de34f82d0c51",
  },
  {
    name: "Web Application Pentesting",
    issuer: "TryHackMe",
    date: "June 2025",
    status: "completed",
    credentialUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-8Q8E4W0Q6Q.pdf",
  },
  {
    name: "Web Fundamentals",
    issuer: "TryHackMe",
    date: "June 2025",
    status: "completed",
    credentialUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-IDHQWRQLZ8.pdf",
  },
  {
    name: "Jr. Penetration Tester",
    issuer: "TryHackMe",
    date: "May 2025",
    status: "completed",
    credentialUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-O0YM9PPUPY.pdf",
  },
  {
    name: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    date: "April 2025",
    status: "completed",
    credentialUrl: "https://www.credly.com/badges/d04decc8-9fb2-4332-9140-97b059e6cd12/public_url",
  },
  {
    name: "HTB Certified Penetration Tester Specialist (CPTS)",
    issuer: "HackTheBox",
    date: "—",
    status: "in-progress",
    credentialUrl: "",
  },
];
