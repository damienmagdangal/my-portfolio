type SkillBadgeProps = {
  label: string;
};

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="rounded border border-[#333] bg-surface px-2.5 py-1 font-mono text-xs text-text-primary transition-colors hover:text-accent">
      {label}
    </span>
  );
}
