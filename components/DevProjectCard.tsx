import SkillBadge from "@/components/SkillBadge";
import type { DevProject } from "@/data/labs";

type DevProjectCardProps = {
  project: DevProject;
};

export default function DevProjectCard({ project }: DevProjectCardProps) {
  return (
    <article className="border border-border bg-surface p-5 transition-colors hover:border-border-hover">
      <div className="flex flex-wrap items-baseline gap-2">
        <h3 className="font-mono text-sm font-bold text-text-primary">
          {project.name}
        </h3>
        <span className="text-xs text-text-muted">{project.year}</span>
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <SkillBadge key={tech} label={tech} />
        ))}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-text-muted">
        {project.description}
      </p>
    </article>
  );
}
