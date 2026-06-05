import Link from "next/link";
import type { PostMeta } from "@/lib/mdx";

type BlogCardProps = {
  post: PostMeta;
};

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="border border-border p-5 transition-colors hover:border-[#333]">
      <Link
        href={`/blog/${post.slug}`}
        className="font-mono text-sm leading-snug text-text-primary hover:text-accent"
      >
        {post.title}
      </Link>
      <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-text-muted">
        <span>{formatDate(post.date)}</span>
        {post.tags.length > 0 && (
          <>
            <span>·</span>
            {post.tags.map((tag, index) => (
              <span key={tag}>
                #{tag}
                {index < post.tags.length - 1 ? "," : ""}
              </span>
            ))}
          </>
        )}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-text-muted">
        {post.description}
      </p>
    </article>
  );
}
