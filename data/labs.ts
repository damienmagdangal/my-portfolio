export type HtbMachine = {
  name: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Insane";
  os: "Linux" | "Windows";
  techniques: string[];
  writeupSlug?: string;
};

export type SecurityProject = {
  name: string;
  year: number;
  type: "Lab" | "Script" | "Tool";
  language: string;
  description: string;
  github?: string;
};

export type BugBountyFinding = {
  severity: "Critical" | "High" | "Medium" | "Low";
  category: string;
  detail: string;
  platform: string;
  status: string;
  reportLink?: string;
};

export type DevProject = {
  name: string;
  year: number;
  stack: string[];
  description: string;
  github?: string;
};

export const htbMachines: HtbMachine[] = [
  {
    name: "Connected",
    difficulty: "Easy",
    os: "Linux",
    techniques: [
      "CVE-2025-57819 - FreePBX RCE",
      "privilege escalation via writable files",
      "incron abuse",
    ],
    writeupSlug: "htb-connected",
  },
  {
    name: "DevHub",
    difficulty: "Medium",
    os: "Linux",
    techniques: [
      "MCP RCE",
      "Pivoting",
      "Laterel Movement via Jupyter Rest APIs",
      "Privilege Escalation on hidden endpoint",
    ],
    writeupSlug: "htb-reactor",
  },
  {
    name: "Reactor",
    difficulty: "Medium",
    os: "Linux",
    techniques: [
      "CVE-[REDACTED]",
      "React Flight RCE",
      "Node.js debugger privesc",
      "SSH port forwarding",
    ],
    writeupSlug: "htb-reactor",
  },
  {
    name: "Pterodactyl",
    difficulty: "Medium",
    os: "Linux",
    techniques: [
      "CVE-2025-49132 LFI",
      "CVE-2025-6018 PEAR RCE",
      "MariaDB hash extraction",
      "udisks2 race condition",
    ],
  },
  {
    name: "Wingdata",
    difficulty: "Easy",
    os: "Linux",
    techniques: [
      "tarfile symlink path traversal",
      "CVE-2025-4517",
      "sudoers overwrite",
    ],
  },
  {
    name: "Silentium",
    difficulty: "Easy",
    os: "Linux",
    techniques: [
      "TypeORM type confusion",
      "mass assignment",
      "reset password endpoint abuse",
    ],
  },
  {
    name: "Facts",
    difficulty: "Easy",
    os: "Linux",
    techniques: [
      "mass assignment",
      "path traversal",
      "gftobins exploit",
    ],
  },
  {
    name: "CCTV",
    difficulty: "Easy",
    os: "Linux",
    techniques: [
      "Reconnaissance",
      "SQL Injection",
      "Database Enumeration",
      "Password Cracking"
    ],
  },
  {
    name: "Kobold",
    difficulty: "Easy",
    os: "Linux",
    techniques: [
      "RCE",
      "Docker privilege escalation",
    ],
  },
];

export const securityProjects: SecurityProject[] = [
  {
    name: "Z-Lab JWT Attacks",
    year: 2025,
    type: "Lab",
    language: "Next.js · Express.js · Docker",
    description:
      "Personal cybersecurity web app lab demonstrating JWT vulnerabilities: no-signature token, claims manipulation, KID-based self-signed HS256. Dockerized for portability.",
    github: "https://github.com/damienmagdangal/z-lab-jwt-vulnerability",
  },
  {
    name: "WeLearnSec Shop Docker Deploy",
    year: 2025,
    type: "Script",
    language: "Docker · Bash",
    description:
      "Docker scripts to easily spin up WeLearnSec labs — a vulnerable web app covering OWASP 2021 Top 10 vulnerabilities.",
    github: "https://github.com/damienmagdangal/wls-shop-docker",
  },
  {
    name: "WeLearnSec Bank Docker Deploy",
    year: 2025,
    type: "Script",
    language: "Docker · Bash",
    description:
      "A vulnerable e-commerce web application designed for practicing API web pentesting. This setup uses Docker to simulate a realistic lab environment with minimal system resource usage — no need to run a full Virtual Machine.",
    github: "https://github.com/damienmagdangal/wls-bank-docker",
  },
];

export const bugBountyFindings: BugBountyFinding[] = [
  {
    severity: "High",
    category: "Broken Access Control (OWASP A01:2025)",
    detail:
      "Missing authorization check on endpoint leading to unauthorized data modification and content takeover.",
    platform: "PetitionPH by BetterGov.ph",
    status: "Reported",
    reportLink: "https://github.com/damienmagdangal/petitionph-bug-idor/blob/main/BG_PETITION_Report1.pdf",
  },
];

export const devProjects: DevProject[] = [
  {
    name: "Mezza9 Game Center",
    year: 2026,
    stack: ["React", "Next.js", "Tailwind CSS", "Supabase"],
    description:
      "Simple billiards reservation web app for Mezza9 Game Center",
  },
  {
    name: "Cooperative Web & Mobile Application",
    year: 2020,
    stack: ["Ionic", "Firebase"],
    description:
      "Centralized repository and payment-tracking app for a local cooperative.",
  },
  {
    name: "Queue R",
    year: 2019,
    stack: ["Ionic", "Firebase"],
    description:
      "Mobile app for local clothing stores enabling QR-based product browsing, payment and delivery tracking.",
  },
  {
    name: "L.E.T. Review Platform",
    year: 2018,
    stack: ["Angular 7", "Firebase"],
    description:
      "Mock exam platform for the Licensure Examination for Teachers (LET). Subscription payments, device-locking, and reporting.",
  },
  {
    name: "Hustle Clothing Manila App",
    year: 2017,
    stack: ["Ionic", "Firebase", "AdobeXD"],
    description:
      "Hybrid mobile app for a local clothing brand with product browsing and virtual currency.",
  },
];
