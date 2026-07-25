import type { Metadata } from "next";
import BugBountyCard from "@/components/BugBountyCard";
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
              <BugBountyCard key={finding.category} finding={finding} />
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
