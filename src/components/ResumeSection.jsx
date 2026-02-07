import { FaEye, FaDownload } from "react-icons/fa";

export default function ResumeSection() {
  return (
    <div className="bg-slate-800/60 rounded-2xl p-8 text-center shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Resume</h3>
      <p className="text-slate-400 mb-8">
        View or download my resume to learn more about my experience and skills.
      </p>

      <div className="flex justify-center gap-6">
        {/* View Resume */}
        <a
          href="/BilalLatestResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border border-slate-500 hover:border-indigo-400 rounded-xl transition"
        >
          <FaEye />
          View Resume
        </a>

        {/* Download Resume */}
        <a
          href="/BilalLatestResume.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl transition"
        >
          <FaDownload />
          Download Resume
        </a>
      </div>
    </div>
  );
}
