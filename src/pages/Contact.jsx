import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import portfolioData from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Contact"
          title="Direct ways to connect with me."
          description="A clean contact section with quick access to email, phone, and professional links."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="rounded-[2rem] border border-white/10 bg-black p-8 text-white shadow-[0_18px_60px_rgba(15,23,42,0.18)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">Let&apos;s connect</p>
            <p className="mt-5 text-lg leading-8 text-slate-300">{portfolioData.contact.message}</p>

            <div className="mt-8 space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-3">
                  <FaEnvelope className="mt-1 text-white" />
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <a href={`mailto:${portfolioData.contact.email}`} className="mt-1 block font-medium text-white">
                      {portfolioData.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-3">
                  <FaPhone className="mt-1 text-white" />
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <a href={`tel:${portfolioData.contact.phone.replace(/\s+/g, "")}`} className="mt-1 block font-medium text-white">
                      {portfolioData.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-3">
                  <FaLocationDot className="mt-1 text-white" />
                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="mt-1 font-medium text-white">{portfolioData.contact.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {portfolioData.contact.socials.map((social) => {
                const SocialIcon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.label === "Email" || social.label === "Call" ? undefined : "_blank"}
                    rel={social.label === "Email" || social.label === "Call" ? undefined : "noopener noreferrer"}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    <SocialIcon className="text-xs text-white" />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={120} className="rounded-[2rem] border border-white/10 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Quick access</p>
            <div className="mt-6 grid gap-4">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-950 hover:bg-slate-100"
              >
                <p className="text-sm font-medium text-slate-500">Email</p>
                <p className="mt-2 text-lg font-semibold text-slate-950">{portfolioData.contact.email}</p>
              </a>
              <a
                href={`tel:${portfolioData.contact.phone.replace(/\s+/g, "")}`}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-950 hover:bg-slate-100"
              >
                <p className="text-sm font-medium text-slate-500">Phone</p>
                <p className="mt-2 text-lg font-semibold text-slate-950">{portfolioData.contact.phone}</p>
              </a>
              <a
                href={portfolioData.personal.resumeLink}
                download
                className="inline-flex items-center justify-center rounded-3xl bg-slate-950 px-5 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Download Resume
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
