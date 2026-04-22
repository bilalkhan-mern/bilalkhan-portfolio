import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import portfolioData from "./data/portfolioData";
import SectionTitle from "./components/SectionTitle";

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />

        <section id="experience" className="px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Experience"
              title="Internship and practical learning"
            />

            <div className="mt-12 grid gap-6">
              {portfolioData.internship.map((item) => (
                <div
                  key={item.company}
                  className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm"
                >
                  <div className="flex flex-col gap-3 border-b border-stone-200 pb-6 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900">{item.role}</h3>
                      <p className="mt-2 text-lg text-amber-700">{item.company}</p>
                    </div>
                    <span className="inline-flex w-fit rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
                      {item.duration}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3 text-slate-600">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-amber-600" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Skills />
        <Projects />

        <section id="education" className="bg-white px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Education"
              title="Academic background"
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {portfolioData.education.map((item) => (
                <div
                  key={item.course}
                  className="rounded-3xl border border-stone-200 bg-stone-50 p-8"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {item.duration}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">{item.course}</h3>
                  <p className="mt-2 text-slate-600">{item.institute}</p>
                  <p className="mt-4 text-sm font-medium text-amber-700">{item.result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Certifications"
              title="Programs and certifications"
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {portfolioData.certifications.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Certification
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-slate-600">{item.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
