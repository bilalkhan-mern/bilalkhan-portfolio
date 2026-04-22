import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import portfolioData from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src={Logo} alt="Bilal Khan Logo" className="h-10 w-10 rounded-full object-cover" />
              <h3 className="text-xl font-bold text-slate-900">Bilal Khan Pathan</h3>
            </div>
            <p className="max-w-sm text-slate-600">
              React portfolio made with a clean layout, responsive design, and beginner-friendly code structure.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-slate-900">Navigation</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#home" className="transition hover:text-amber-700">Home</a></li>
              <li><a href="#about" className="transition hover:text-amber-700">About</a></li>
              <li><a href="#skills" className="transition hover:text-amber-700">Skills</a></li>
              <li><a href="#projects" className="transition hover:text-amber-700">Projects</a></li>
              <li><a href="#certifications" className="transition hover:text-amber-700">Certificates</a></li>
              <li><a href="#contact" className="transition hover:text-amber-700">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-slate-900">Connect</h4>
            <div className="flex gap-5 text-xl text-slate-600">
              <a href={portfolioData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-amber-700"><FaGithub /></a>
              <a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-amber-700"><FaLinkedin /></a>
              {portfolioData.socialLinks.twitter && (
                <a href={portfolioData.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="transition hover:text-amber-700"><FaTwitter /></a>
              )}
              <a href={`mailto:${portfolioData.personal.email}`} className="transition hover:text-amber-700"><FaEnvelope /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-200 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Bilal Khan. All rights reserved.
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 rounded-full bg-slate-900 p-3 text-white shadow-lg transition hover:bg-amber-700"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
