import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import portfolioData from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Projects"
          title="Selected work that shows practical full-stack thinking."
          description="These projects highlight my ability to build responsive interfaces, connect APIs, and organize features clearly."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {portfolioData.projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(15,23,42,0.12)]">
                  <div className="flex items-center justify-between border-b border-white/10 bg-black px-6 py-5 text-white sm:px-7">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
                      {project.featured ? "Featured Project" : "Supporting Project"}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold">{project.title}</h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white transition duration-300 group-hover:scale-105">
                    <portfolioData.utilities.arrowRight className="text-sm" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-base leading-8 text-slate-600">{project.description}</p>

                  <div className="mt-6 rounded-3xl bg-slate-50 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Impact</p>
                    <ul className="mt-4 space-y-3">
                      {project.impact.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-6 text-slate-600">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                      >
                        GitHub
                        <portfolioData.utilities.externalLink className="text-xs" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        Live Demo
                        <portfolioData.utilities.externalLink className="text-xs" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
