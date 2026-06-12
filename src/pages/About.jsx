import portfolioData from "../data/portfolioData";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="About"
          title="A fresher who cares about polish, clarity, and useful outcomes."
          description={portfolioData.personal.objective}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-10">
            <p className="text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              {portfolioData.personal.longIntro}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {portfolioData.aboutPoints.map((point, index) => (
                <div
                  key={point}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="font-display text-2xl font-semibold text-slate-950">{`0${index + 1}`}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{point}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="rounded-[2rem] border border-white/10 bg-slate-950 p-8 text-white shadow-[0_18px_60px_rgba(15,23,42,0.18)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">Quick Facts</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <span className="text-slate-400">Name</span>
                <span className="font-medium text-white">{portfolioData.personal.name}</span>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <span className="text-slate-400">Role</span>
                <span className="font-medium text-white">{portfolioData.personal.title}</span>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <span className="text-slate-400">Location</span>
                <span className="font-medium text-white">{portfolioData.personal.location}</span>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <span className="text-slate-400">Status</span>
                <span className="font-medium text-white">Open for opportunities</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-slate-400">Current Goal</span>
                <span className="font-medium text-white">Internship or junior role</span>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 to-slate-800/30 p-5">
              <p className="text-sm text-slate-300">Availability</p>
              <p className="mt-2 text-base leading-7 text-white">{portfolioData.personal.availability}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
