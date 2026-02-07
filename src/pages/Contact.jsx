import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
import ResumeSection from "../components/ResumeSection";

export default function Contact() {
  return (
    <section className="py-20">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <ResumeSection />

          
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-12">
          I’m open to new opportunities, collaborations, and freelance work.
          Feel free to connect with me through any of the platforms below.
        </p>

        {/* Contact Card */}
        <div className="bg-slate-800/60 rounded-2xl p-10 shadow-lg">
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Email */}
            <a
              href="mailto:bilal8511018651@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 hover:bg-slate-900 transition"
            >
              <FaEnvelope className="text-indigo-400 text-2xl" />
              <div className="text-left">
                <p className="text-sm text-slate-400">Email</p>
                <p className="font-medium text-slate-200">
                  bilal8511018651@gmail.com
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/bilalkhan-mern"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 hover:bg-slate-900 transition"
            >
              <FaGithub className="text-indigo-400 text-2xl" />
              <div className="text-left">
                <p className="text-sm text-slate-400">GitHub</p>
                <p className="font-medium text-slate-200">
                  github.com/bilalkhan-mern
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/bilalkhan-pathan-7258a4252"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 hover:bg-slate-900 transition"
            >
              <FaLinkedin className="text-indigo-400 text-2xl" />
              <div className="text-left">
                <p className="text-sm text-slate-400">LinkedIn</p>
                <p className="font-medium text-slate-200">
                  linkedin.com/in/bilalkhan-pathan
                </p>
              </div>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 hover:bg-slate-900 transition"
            >
              <FaTwitter className="text-indigo-400 text-2xl" />
              <div className="text-left">
                <p className="text-sm text-slate-400">Twitter</p>
                <p className="font-medium text-slate-200">
                  twitter.com/Bilalkhan8487
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-slate-500 text-sm mt-10">
          I usually respond within 24 hours.
        </p>
      </div>
    </section>
  );
}
