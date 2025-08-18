import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";

export interface TechPostMeta {
  slug: string;
  title: string;
  date?: string;
  repository?: string;
}

const techDir = path.join(process.cwd(), "posts", "tech");

export async function getTechPosts(): Promise<TechPostMeta[]> {
  const files = await fs.readdir(techDir);
  const mdFiles = files.filter((f) => f.endsWith(".md"));
  const posts = await Promise.all(
    mdFiles.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(techDir, fileName);
      const file = await fs.readFile(fullPath, "utf8");
      const { data } = matter(file);
      const title = (data as { title?: string }).title ?? slug;
      const date = (data as { date?: string }).date;
      const repository = (data as { repository?: string }).repository;
      return { slug, title, date, repository } as TechPostMeta;
    })
  );
  // Sort by date desc if present, otherwise by title
  return posts.sort((a, b) => {
    if (a.date && b.date && a.date !== b.date) {
      return a.date < b.date ? 1 : -1;
    }
    return a.title.localeCompare(b.title);
  });
}

export async function getTechPostHtml(
  slug: string
): Promise<{ meta: TechPostMeta; html: string } | null> {
  const fullPath = path.join(techDir, `${slug}.md`);
  try {
    const file = await fs.readFile(fullPath, "utf8");
    const { content, data } = matter(file);
    const processed = await remark()
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings, { behavior: "append" })
      .use(rehypeExternalLinks, {
        target: "_blank",
        rel: ["noopener", "noreferrer"],
      })
      .use(rehypeStringify)
      .process(content);
    const title = (data as { title?: string }).title ?? slug;
    const date = (data as { date?: string }).date;
    const repository = (data as { repository?: string }).repository;
    return {
      meta: { slug, title, date, repository },
      html: processed.toString(),
    };
  } catch {
    return null;
  }
}

export async function getAllTechSlugs(): Promise<string[]> {
  const files = await fs.readdir(techDir);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
