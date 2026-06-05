import type { Metadata } from "next";
import BlogIndex from "@/components/BlogIndex";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog | zchown",
  description:
    "HTB writeups, web exploitation research, and offensive security notes.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="bg-background text-text-primary">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <p className="mb-8 font-mono text-sm text-text-muted">{"// write-ups"}</p>
        <BlogIndex posts={posts} />
      </div>
    </main>
  );
}
