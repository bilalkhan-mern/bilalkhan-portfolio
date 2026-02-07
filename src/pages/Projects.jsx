import projectsData from "../data/projectsData";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p className="text-slate-400 mb-12 max-w-2xl">
          A selection of projects demonstrating my skills in building modern,
          scalable, and maintainable web applications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/60 rounded-2xl p-6 flex flex-col justify-between hover:scale-[1.02] transition"
            >
              {/* Top */}
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom actions */}
              <div className="flex items-center justify-between">
                <Link
                  to={`/projects/${project.id}`}
                  className="text-indigo-400 hover:text-indigo-300 font-medium"
                >
                  View Details →
                </Link>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white text-xl"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
