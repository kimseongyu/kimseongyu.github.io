import path from "path";
import fs from "fs/promises";

export interface Project {
  project: string;
  image: string;
  skill: string;
  description: string;
  repository?: string;
  demo?: string;
  link?: string;
}

const projectsFile = path.join(
  process.cwd(),
  "posts",
  "projects",
  "projects.json",
);

export async function getProjects(): Promise<Project[]> {
  try {
    const fileContent = await fs.readFile(projectsFile, "utf8");
    const projects: Project[] = JSON.parse(fileContent);
    return projects;
  } catch (error) {
    console.error("Failed to read projects file:", error);
    return [];
  }
}
