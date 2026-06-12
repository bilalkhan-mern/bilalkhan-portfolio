import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import portfolioData from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Skills"
          title="A focused stack for building clean frontend and solid backend experiences."
          description="Grouped by the tools I use most often so recruiters can quickly scan my capabilities."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {portfolioData.skills.map((group, index) => {
            const GroupIcon = group.icon;

            return (
              <Reveal key={group.title} delay={index * 80} className="h-full">
                <div className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-zinc-950 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)] sm:p-7">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-xl text-slate-950">
                    <GroupIcon />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-white">{group.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{group.description}</p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {group.items.map((item) => {
                      const SkillIcon = item.icon;

                      return (
                        <span
                          key={item.name}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
                        >
                          <SkillIcon className="text-white" />
                          {item.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
