import portfolioData from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Skills"
          title="Technologies I use to build projects"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {portfolioData.skills.map((group) => (
            <div key={group.title} className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900">{group.title}</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
