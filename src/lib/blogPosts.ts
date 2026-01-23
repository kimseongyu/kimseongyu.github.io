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

export interface BaseBlogPostMeta {
  slug: string;
  title: string;
  date?: string;
}

export interface BlogPostMetaTech extends BaseBlogPostMeta {
  tag: "tech";
  repository?: string;
}

export interface BlogPostMetaOpenSource extends BaseBlogPostMeta {
  tag: "open source";
  issue?: string;
  pr?: string;
}

export type BlogPostMeta = BlogPostMetaTech | BlogPostMetaOpenSource;

const blogDir = path.join(process.cwd(), "posts", "blog");

export async function getBlogPosts(): Promise<BlogPostMeta[]> {
  const files = await fs.readdir(blogDir);
  const mdFiles = files.filter((f) => f.endsWith(".md"));
  const posts = await Promise.all(
    mdFiles.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(blogDir, fileName);
      const file = await fs.readFile(fullPath, "utf8");
      const { data } = matter(file);
      const title = (data as { title?: string }).title ?? slug;
      const date = (data as { date?: string }).date;
      const rawTag = (data as { tag?: string }).tag;

      if (rawTag === "open source") {
        return {
          slug,
          title,
          date,
          tag: "open source",
          issue: (data as { issue?: string }).issue,
          pr: (data as { pr?: string }).pr,
        } as BlogPostMetaOpenSource;
      } else {
        return {
          slug,
          title,
          date,
          tag: "tech",
          repository: (data as { repository?: string }).repository,
        } as BlogPostMetaTech;
      }
    }),
  );
  // Sort by date desc if present, otherwise by title
  return posts.sort((a, b) => {
    if (a.date && b.date && a.date !== b.date) {
      return a.date < b.date ? 1 : -1;
    }
    return a.title.localeCompare(b.title);
  });
}

export async function getBlogPostHtml(
  slug: string,
): Promise<{ meta: BlogPostMeta; html: string } | null> {
  const fullPath = path.join(blogDir, `${slug}.md`);
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
    const rawTag = (data as { tag?: string }).tag;

    let meta: BlogPostMeta;
    if (rawTag === "open source") {
      meta = {
        slug,
        title,
        date,
        tag: "open source",
        issue: (data as { issue?: string }).issue,
        pr: (data as { pr?: string }).pr,
      };
    } else {
      meta = {
        slug,
        title,
        date,
        tag: "tech",
        repository: (data as { repository?: string }).repository,
      };
    }

    return {
      meta,
      html: processed.toString(),
    };
  } catch {
    return null;
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const files = await fs.readdir(blogDir);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
