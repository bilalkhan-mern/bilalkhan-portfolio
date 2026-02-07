export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold mb-4">About Me</h1>
        <p className="text-slate-400 max-w-2xl">
          A brief introduction about who I am, what I do, and what I’m
          passionate about as a developer.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-slate-300 leading-relaxed max-w-3xl">
            I am a passionate{" "}
            <span className="text-indigo-400 font-medium">
              MERN Stack Developer {" "}
            </span>
            specializing in building modern, scalable, and high-performance web
            applications. With a strong foundation in{" "}
            <span className="text-white">
              MongoDB, Express.js, React, and Node.js
            </span>
            , I focus on creating clean architectures, intuitive user
            experiences, and efficient backend systems.
          </p>
          <p className="text-slate-300 leading-relaxed max-w-3xl mt-6">
            I enjoy transforming complex ideas into simple, elegant solutions
            using modern tools like
            <span className="text-white"> Tailwind CSS</span>, RESTful APIs, and
            component-driven development. My approach emphasizes performance,
            maintainability, and industry best practices while ensuring every
            project delivers real value.
          </p>

          <p className="text-slate-300 leading-relaxed max-w-3xl mt-6">
            Always eager to learn and improve, I continuously explore new
            technologies and patterns to stay aligned with evolving web
            standards. My goal is to contribute to impactful projects and
            collaborate with teams that value quality, innovation, and growth.
          </p>
        </div>

        {/* Right Card */}
        <div className="bg-slate-800/60 backdrop-blur rounded-2xl p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Quick Facts</h2>

          <ul className="space-y-4 text-slate-300">
            <li className="flex justify-between">
              <span className="text-slate-400">Name</span>
              <span className="text-white">Bilal Khan</span>
            </li>
            <li className="flex justify-between">
              <span className="text-slate-400">Role</span>
              <span className="text-white">Full Stack Developer</span>
            </li>
            <li className="flex justify-between">
              <span className="text-slate-400">Location</span>
              <span className="text-white">Ahmedabad , Gujarat</span>
            </li>
            <li className="flex justify-between">
              <span className="text-slate-400">Experience</span>
              <span className="text-white">Fresher</span>
            </li>
            <li className="flex justify-between">
              <span className="text-slate-400">Stack</span>
              <span className="text-white">MERN</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
