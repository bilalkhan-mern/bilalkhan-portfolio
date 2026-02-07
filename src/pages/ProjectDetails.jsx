import { useParams, Link } from "react-router-dom";
import projectsData from "../data/projectsData";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projectsData.find(
    (p) => p.id === Number(id)
  );

  if (!project) {
    return (
      <div className="text-center py-20 text-red-400">
        Project not found
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">
          {project.title}
        </h2>

        <p className="text-slate-300 mb-6">
          {project.description}
        </p>

        <h3 className="text-xl font-semibold mb-2">
          Technologies Used
        </h3>

        <ul className="flex flex-wrap gap-3 mb-8">
          {project.tech.map((tech, index) => (
            <li
              key={index}
              className="px-3 py-1 bg-slate-700 rounded-full text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>

        <Link
          to="/projects"
          className="text-indigo-400 hover:text-indigo-300 font-medium"
        >
          ← Back to Projects
        </Link>
      </div>
    </section>
  );
}
