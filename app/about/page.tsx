import type { Metadata } from "next";
import Link from "next/link";
import CertCard from "@/components/CertCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillBadge from "@/components/SkillBadge";
import { certifications } from "@/data/certifications";
import { experiences } from "@/data/experience";

export const metadata: Metadata = {
  title: "About | zchown",
  description:
    "Certifications, skills, and professional background of Jean Damien Magdangal — offensive security enthusiast.",
};

const skillGroups = [
  {
    category: "Offensive Security",
    skills: [
      "Web App Pentesting",
      "API Security Testing",
      "Linux Privilege Escalation",
      "Red Team Operations",
      "Bug Bounty",
      "OWASP Top 10",
      "Broken Access Control",
    ],
  },
  {
    category: "Security Tools",
    skills: [
      "Burp Suite",
      "Caido",
      "Nmap",
      "FFuF",
      "Gobuster",
      "John the Ripper",
      "Metasploit",
      "Arjun",
      "Kiterunner",
      "Subfinder",
      "Crt.sh",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    skills: [
      "Microsoft Azure",
      "Amazon Web Services (AWS)",
      "Google Cloud Platform (GCP)",
      "Azure Fundamentals",
      "Cloud Security",
      "Azure VMs",
      "Azure Networking",
    ],
  },
  {
    category: "Programming & Scripting",
    skills: ["Python", "Bash Scripting", "JavaScript", "TypeScript"],
  },
  {
    category: "Development (Background)",
    skills: [
      "React.js",
      "Next.js",
      "Angular",
      "Node.js/Express.js",
      "Laravel",
      "Firebase",
      "PostgreSQL",
      "MySQL",
      "JWT",
      "Git",
    ],
  },
];

const monthOrder: Record<string, number> = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

function parseCertDate(date: string): number {
  if (date === "—") return 0;

  const match = date.match(/^(\w+)\s+(\d{4})$/);
  if (!match) return 0;

  const month = monthOrder[match[1]] ?? 0;
  const year = parseInt(match[2], 10);
  return year * 100 + month;
}

const sortedCerts = [...certifications].sort(
  (a, b) => parseCertDate(b.date) - parseCertDate(a.date)
);

export default function AboutPage() {
  return (
    <main className="bg-background text-text-primary">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        {/* Hero blurb */}
        <section>
          <p className="max-w-3xl leading-relaxed text-text-muted">
            Offensive Security Enthusiast with 6+ years of experience in enterprise data management at Citibank. Now
            focused on web application security and red teaming. Holder of CRTA, MCRTA, WEB-RTA, C3SA, and ISC2 CC.
          </p>
        </section>

        {/* Certifications */}
        <section className="mt-16">
          <p className="mb-6 font-mono text-sm text-text-muted">
            {"// certifications"}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {sortedCerts.map((cert) => (
              <CertCard key={cert.name} cert={cert} />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-16">
          <p className="mb-6 font-mono text-sm text-text-muted">{"// skills"}</p>
          <div className="space-y-8">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="mb-3 font-mono text-sm text-text-primary">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mt-16">
          <p className="mb-6 font-mono text-sm text-text-muted">
            {"// experience"}
          </p>
          <ExperienceTimeline experiences={experiences} />
        </section>

        {/* Education */}
        <section className="mt-16">
          <p className="mb-6 font-mono text-sm text-text-muted">
            {"// education"}
          </p>
          <p className="text-sm leading-relaxed text-text-muted">
            Bachelor of Science in Information Technology — Technological
            Institute of the Philippines, Quezon City (2019)
          </p>
        </section>

        {/* CTF & Community */}
        <section className="mt-16">
          <p className="mb-6 font-mono text-sm text-text-muted">
            {"// ctf & community"}
          </p>
          <ul className="space-y-3 text-sm leading-relaxed text-text-muted">
            <li>
              <span className="text-text-primary">Participant:</span> Global
              Cyber Skills Benchmark CTF 2026: Project Nightfall (HackTheBox Live
              Event, May 2026)
            </li>
            <li>
              <span className="text-text-primary">HTB Handle:</span> @zchown |
              Focus: Web Application, API Security
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section className="mt-16 border-t border-border pt-10 text-center">
          <p className="text-sm text-text-muted">
            Want to connect? Reach out via{" "}
            <Link
              href="https://www.linkedin.com/in/jdmagdangal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              LinkedIn
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
