import { FaArrowRight, FaDownload, FaEnvelope } from "react-icons/fa";
import portfolioData from "../data/portfolioData";

export default function Hero() {
  return (
    <section id="home" className="overflow-hidden px-6 pb-20 pt-14 sm:pb-24 sm:pt-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800">
            MERN Portfolio for Fresher Opportunities
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {portfolioData.personal.name}
          </h1>

          <p className="mt-4 text-xl font-semibold text-slate-600 sm:text-2xl">
            {portfolioData.personal.title}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            {portfolioData.personal.shortIntro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
            >
              View Projects
              <FaArrowRight />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-stone-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-amber-500 hover:text-amber-700"
            >
              Contact Me
              <FaEnvelope />
            </a>

            <a
              href={portfolioData.personal.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-amber-500 hover:text-amber-700"
            >
              Resume
              <FaDownload />
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {portfolioData.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-amber-200 blur-2xl" />
          <div className="absolute -bottom-10 right-4 h-32 w-32 rounded-full bg-orange-100 blur-3xl" />

          <div className="relative rounded-[2rem] border border-stone-200 bg-white p-8 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Quick Profile</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">Why hire me?</h2>
            <p className="mt-4 leading-7 text-slate-600">
              I can build responsive React interfaces, create backend APIs, and deliver full-stack projects with a clean and professional user experience.
            </p>

            <div className="mt-8 space-y-4">
              {portfolioData.highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-stone-50 px-4 py-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                    B
                  </span>
                  <p className="text-sm font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-slate-900 px-5 py-5 text-white">
              <p className="text-sm text-slate-300">Current goal</p>
              <p className="mt-2 text-lg font-semibold">{portfolioData.personal.availability}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
