import Link from "next/link";
import SkillBadge from "@/components/SkillBadge";
import type { HtbMachine } from "@/data/labs";

const difficultyStyles: Record<HtbMachine["difficulty"], string> = {
  Easy: "border-accent text-accent",
  Medium: "border-amber-500 text-amber-500",
  Hard: "border-red-500 text-red-500",
  Insane: "border-purple-500 text-purple-500",
};

type LabCardProps = {
  machine: HtbMachine;
};

export default function LabCard({ machine }: LabCardProps) {
  return (
    <article className="border border-border bg-surface p-5">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="font-mono text-sm font-bold text-text-primary">
          {machine.name}
        </h3>
        <code
          className={`rounded border px-2 py-0.5 font-mono text-xs ${difficultyStyles[machine.difficulty]}`}
        >
          {machine.difficulty}
        </code>
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
