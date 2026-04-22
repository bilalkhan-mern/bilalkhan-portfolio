import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import ResumeSection from "../components/ResumeSection";
import portfolioData from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let recruiters reach you easily"
        />

        <div className="mt-12 space-y-8">
          <ResumeSection />

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-lg">
              <h3 className="text-2xl font-semibold">Let us connect</h3>
              <p className="mt-4 leading-7 text-slate-300">
                I am looking for opportunities where I can contribute, learn, and grow as a React developer.
              </p>

              <div className="mt-8 space-y-5">
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a href={`mailto:${portfolioData.personal.email}`} className="mt-1 inline-block font-medium text-white">
                    {portfolioData.personal.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="mt-1 font-medium text-white">{portfolioData.personal.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="mt-1 font-medium text-white">{portfolioData.personal.location}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <FaEnvelope className="text-2xl text-amber-700" />
                <p className="mt-5 text-lg font-semibold text-slate-900">Email</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{portfolioData.personal.email}</p>
              </a>

              <a
                href={portfolioData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <FaGithub className="text-2xl text-amber-700" />
                <p className="mt-5 text-lg font-semibold text-slate-900">GitHub</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">View source code and project repositories.</p>
              </a>

              <a
                href={portfolioData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <FaLinkedin className="text-2xl text-amber-700" />
                <p className="mt-5 text-lg font-semibold text-slate-900">LinkedIn</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Connect with me for professional opportunities.</p>
              </a>

              {portfolioData.socialLinks.twitter && (
                <a
                  href={portfolioData.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <FaTwitter className="text-2xl text-amber-700" />
                  <p className="mt-5 text-lg font-semibold text-slate-900">Twitter</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Extra social link for networking and updates.</p>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
