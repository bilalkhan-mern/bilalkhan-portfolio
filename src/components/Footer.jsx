import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import portfolioData from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-slate-950">{portfolioData.personal.name}</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
              {portfolioData.personal.subtitle} focused on responsive interfaces, practical MERN delivery, and clear user experiences.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={portfolioData.contact.socials[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-950 hover:text-slate-950"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={portfolioData.contact.socials[1].href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-950 hover:text-slate-950"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-950 hover:text-slate-950"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-white transition hover:bg-slate-800"
              aria-label="Back to top"
            >
              <FaArrowUp className="text-xs" />
            </button>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
          (c) {new Date().getFullYear()} Bilal Khan Pathan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
