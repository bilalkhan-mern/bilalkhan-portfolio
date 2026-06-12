import { FaDownload, FaEye } from "react-icons/fa";
import portfolioData from "../data/portfolioData";

export default function ResumeSection() {
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-bold text-slate-900">Resume</h3>
      <p className="mt-4 max-w-2xl text-slate-600">
        View or download your resume so recruiters can quickly check your education, internship, skills, and project experience.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={portfolioData.personal.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
        >
          <FaEye />
          View Resume
        </a>

        <a
          href={portfolioData.personal.resumeLink}
          download
          className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
        >
          <FaDownload />
          Download Resume
        </a>
      </div>
    </div>
  );
}
