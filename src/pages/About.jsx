import portfolioData from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="About Me"
          title="A simple and professional introduction"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-stone-200 bg-stone-50 p-8">
            <p className="text-lg leading-8 text-slate-600">{portfolioData.personal.longIntro}</p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              I enjoy converting designs into responsive pages, creating reusable components, and building projects that help me grow as a frontend and MERN developer.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-slate-900 p-8 text-white shadow-lg">
            <h3 className="text-2xl font-semibold">Quick Facts</h3>

            <div className="mt-8 space-y-5 text-sm sm:text-base">
              <div className="flex items-center justify-between gap-4 border-b border-slate-700 pb-4">
                <span className="text-slate-300">Name</span>
                <span className="font-semibold">{portfolioData.personal.name}</span>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-slate-700 pb-4">
                <span className="text-slate-300">Role</span>
                <span className="font-semibold">MERN Stack Developer</span>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-slate-700 pb-4">
                <span className="text-slate-300">Location</span>
                <span className="font-semibold">{portfolioData.personal.location}</span>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-slate-700 pb-4">
                <span className="text-slate-300">Status</span>
                <span className="font-semibold">Available for work</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-slate-300">Main Focus</span>
                <span className="font-semibold">Full-Stack MERN Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
