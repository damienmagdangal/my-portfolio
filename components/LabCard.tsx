import Link from "next/link";
import SkillBadge from "@/components/SkillBadge";
import StatusPill from "@/components/StatusPill";
import type { HtbMachine } from "@/data/labs";

const difficultyTone: Record<HtbMachine["difficulty"], "accent" | "warning" | "danger" | "neutral"> = {
  Easy: "accent",
  Medium: "warning",
  Hard: "danger",
  Insane: "neutral",
};

type LabCardProps = {
  machine: HtbMachine;
};

export default function LabCard({ machine }: LabCardProps) {
  return (
    <article className="border border-border bg-surface p-5 transition-colors hover:border-border-hover">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="font-mono text-sm font-bold text-text-primary">
          {machine.name}
        </h3>
        <StatusPill as="code" tone={difficultyTone[machine.difficulty]}>
          {machine.difficulty}
        </StatusPill>
        <span className="font-mono text-xs text-text-muted">{machine.os}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {machine.techniques.map((technique) => (
          <SkillBadge key={technique} label={technique} />
        ))}
      </div>

      {machine.writeupSlug && (
        <Link
          href={`/blog/${machine.writeupSlug}`}
          className="mt-4 inline-block font-mono text-xs text-accent hover:underline"
        >
          → Read Writeup
        </Link>
      )}
    </article>
  );
}
