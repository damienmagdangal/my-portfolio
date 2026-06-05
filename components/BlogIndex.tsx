"use client";

import { useMemo, useState } from "react";
import BlogCard from "@/components/BlogCard";
import type { PostMeta } from "@/lib/mdx";

type BlogIndexProps = {
  posts: PostMeta[];
};

export default function BlogIndex({ posts }: BlogIndexProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(
    () => [...new Set(posts.flatMap((post) => post.tags))].sort(),
    [posts]
  );

  const filteredPosts = useMemo(
    () =>
      activeTag
        ? posts.filter((post) => post.tags.includes(activeTag))
        : posts,
    [posts, activeTag]
  );

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveTag(null)}
          className={`rounded border px-3 py-1 font-mono text-xs transition-colors ${
            activeTag === null
              ? "border-accent text-accent"
              : "border-border text-text-muted hover:border-[#333] hover:text-text-primary"
          }`}
        >
          all
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={`rounded border px-3 py-1 font-mono text-xs transition-colors ${
              activeTag === tag
                ? "border-accent text-accent"
                : "border-border text-text-muted hover:border-[#333] hover:text-text-primary"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {filteredPosts.length > 0 ? (
        <div className="mt-8 grid gap-4">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-8 font-mono text-sm text-text-muted">
          {"// no posts found for this tag"}
        </p>
      )}
    </>
  );
}
