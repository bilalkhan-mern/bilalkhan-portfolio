import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={Logo}
                alt="Bilal Khan Logo"
                className="h-10 w-10 object-contain"
              />
              <h3 className="text-xl font-bold">Bilal Khan</h3>
            </div>
            <p className="text-slate-400 max-w-sm">
              Full Stack Developer crafting clean, scalable, and modern web
              applications.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/home" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/skills" className="hover:text-white">Skills</Link></li>
              <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-5 text-xl text-slate-400">
              <a href="https://github.com/yourusername" target="_blank" className="hover:text-indigo-400"><FaGithub /></a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-indigo-400"><FaLinkedin /></a>
              <a href="https://twitter.com/yourusername" target="_blank" className="hover:text-indigo-400"><FaTwitter /></a>
              <a href="mailto:bilalkhan@example.com" className="hover:text-indigo-400"><FaEnvelope /></a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Bilal Khan. All rights reserved.
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 p-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg transition"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
