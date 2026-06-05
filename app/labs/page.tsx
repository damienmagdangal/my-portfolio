import type { Metadata } from "next";
import DevProjectCard from "@/components/DevProjectCard";
import LabCard from "@/components/LabCard";
import SecurityProjectCard from "@/components/SecurityProjectCard";
import {
  bugBountyFindings,
  devProjects,
  htbMachines,
  securityProjects,
} from "@/data/labs";

export const metadata: Metadata = {
  title: "Labs | zchown",
  description:
    "HackTheBox machines, security projects, bug bounty findings, and development background.",
};

const severityStyles: Record<
  (typeof bugBountyFindings)[number]["severity"],
  string
> = {
  Critical: "border-red-600 text-red-600",
  High: "border-red-500 text-red-500",
  Medium: "border-amber-500 text-amber-500",
  Low: "border-yellow-500 text-yellow-500",
};

export default function LabsPage() {
  return (
    <main className="bg-background text-text-primary">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        {/* HTB Machines */}
        <section>
          <p className="mb-6 font-mono text-sm text-text-muted">
            {"// hackthebox machines"}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {htbMachines.map((machine) => (
              <LabCard key={machine.name} machine={machine} />
            ))}
          </div>
        </section>

        {/* Security Projects & Tools */}
        <section className="mt-16">
          <p className="mb-6 font-mono text-sm text-text-muted">
            {"// tools & projects"}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {securityProjects.map((project) => (
              <SecurityProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        {/* Bug Bounty Findings */}
        <section className="mt-16">
          <p className="mb-6 font-mono text-sm text-text-muted">
            {"// bug bounty"}
          </p>
          <div className="space-y-4">
            {bugBountyFindings.map((finding) => (
              <article
                key={finding.category}
                className="border border-border bg-surface p-5"
              >
                <div className="flex flex-wrap items-start gap-3">
                  <code
                    className={`shrink-0 rounded border px-2 py-0.5 font-mono text-xs ${severityStyles[finding.severity]}`}
                  >
                    {finding.severity}
                  </code>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-sm text-text-primary">
                      {finding.category}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {finding.detail}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-muted">
                      <span>Platform: {finding.platform}</span>
                      <span>Status: {finding.status}</span>
                      {finding.reportLink && (
                        <a
                          href={finding.reportLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline"
                        >
                          Report →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs text-text-muted">
            Platform details withheld per responsible disclosure policy.
          </p>
        </section>

        {/* Development Background */}
        <section className="mt-16">
          <p className="mb-2 font-mono text-sm text-text-muted">
            {"// development background"}
          </p>
          <p className="mb-6 text-sm text-text-muted">
            Past projects from my development years. Retained for context — not
            active services.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {devProjects.map((project) => (
              <DevProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
