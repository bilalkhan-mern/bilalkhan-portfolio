import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import portfolioData from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="bg-white px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Projects"
          title="Selected work that shows my skills"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {portfolioData.projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-3xl border border-stone-200 bg-stone-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Featured Project</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-amber-700"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="mt-4 flex-grow leading-7 text-slate-600">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-700 ring-1 ring-stone-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm font-semibold">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-700 transition hover:text-amber-700"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-700 transition hover:text-amber-700"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
