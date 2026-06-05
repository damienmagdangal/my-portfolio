import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

const blogDir = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
};

function toPostMeta(
  data: Record<string, unknown>,
  filename: string
): PostMeta {
  return {
    slug: (data.slug as string) ?? filename.replace(/\.md$/, ""),
    title: data.title as string,
    date: data.date as string,
    tags: (data.tags as string[]) ?? [],
    description: data.description as string,
  };
}

function preprocessMarkdown(markdown: string): string {
  return markdown.replace(
    /!\[\[([^\]]+)\]\]/g,
    "![$1](/images/blog/$1)"
  );
}

async function renderMarkdown(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePrettyCode, {
      theme: "github-dark",
      defaultLang: "plaintext",
      keepBackground: true,
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(preprocessMarkdown(markdown));

  return result.toString();
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const files = await fs.readdir(blogDir);

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".md"))
      .map(async (filename) => {
        const raw = await fs.readFile(path.join(blogDir, filename), "utf8");
        const { data } = matter(raw);
        return toPostMeta(data, filename);
      })
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(
  slug: string
): Promise<{ meta: PostMeta; content: string; markdown: string }> {
  const filepath = path.join(blogDir, `${slug}.md`);

  let raw: string;
  try {
    raw = await fs.readFile(filepath, "utf8");
  } catch {
    throw new Error(`Post not found: ${slug}`);
  }

  const { data, content } = matter(raw);
  const meta = toPostMeta(data, `${slug}.md`);
  const html = await renderMarkdown(content);

  return { meta, content: html, markdown: content };
}
