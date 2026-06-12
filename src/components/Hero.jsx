import { FaArrowRight, FaDownload, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import portfolioData from "../data/portfolioData";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.10),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(148,163,184,0.16),_transparent_30%),linear-gradient(180deg,#000000_0%,#0a0a0a_55%,#f8fafc_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-12 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <Reveal className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-white" />
            Open to MERN internships and junior roles
          </div>

          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-300">
              MERN Stack Fresher
            </p>
            <h1 className="max-w-4xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Building modern full-stack experiences for real users.
            </h1>
            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {portfolioData.personal.shortIntro}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-200 hover:shadow-lg hover:shadow-white/10"
            >
              View Projects
              <FaArrowRight className="text-xs" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Contact Me
              <FaEnvelope className="text-xs" />
            </a>
            <a
              href={portfolioData.personal.resumeLink}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-900"
            >
              Download Resume
              <FaDownload className="text-xs" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {portfolioData.heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <p className="font-display text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-8 right-6 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/90 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.18)] backdrop-blur sm:p-8">
            <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">Profile</p>
              <h2 className="mt-4 font-display text-3xl font-semibold">A focused builder with a modern UI mindset.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                I enjoy designing interfaces that feel polished, writing clean components, and connecting them to practical backend logic.
              </p>

              <div className="mt-8 space-y-3">
                {portfolioData.heroHighlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-slate-950">
                      +
                    </span>
                    <p className="text-sm leading-6 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 to-slate-800/30 p-5">
                <div className="flex items-start gap-3">
                  <FaLocationDot className="mt-1 text-white" />
                  <div>
                    <p className="text-sm text-slate-300">Location</p>
                    <p className="mt-1 font-medium text-white">{portfolioData.personal.location}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-start gap-3">
                  <FaEnvelope className="mt-1 text-white" />
                  <div>
                    <p className="text-sm text-slate-300">Email</p>
                    <a href={`mailto:${portfolioData.personal.email}`} className="mt-1 block font-medium text-white">
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
