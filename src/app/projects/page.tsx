import { getProjects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="a4-container landscape">
      <div className="font-sans flex flex-col min-h-full">
        <div className="top-0 text-center bg-white z-10 py-8 mb-8">
          <h1 className="text-4xl font-bold">Projects</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 pb-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col bg-white"
            >
              {project.image && (
                <div className="relative w-full h-64 bg-gray-100 border-b border-gray-100">
                  <Image
                    src={project.image}
                    alt={project.project}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-2">{project.project}</h2>
                <p className="text-sm text-gray-500 mb-4 font-medium">
                  {project.skill}
                </p>
                <p className="text-gray-700 text-base mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4 mt-auto pt-4 border-t border-gray-100">
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-semibold"
                    >
                      Demo
                    </Link>
                  )}
                  {project.repository && (
                    <Link
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors text-sm font-semibold"
                    >
                      Repository
                    </Link>
                  )}
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors text-sm font-semibold"
                    >
                      Link
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
