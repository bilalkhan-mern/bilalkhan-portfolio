export default function Skills() {
  return (
    <>
      <section className="bg-slate-800/40 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-slate-400 max-w-2xl mb-12">
            A focused set of technologies and practices I use to build scalable,
            maintainable, and high-quality web applications.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Frontend */}
            <div className="bg-slate-900/60 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2 text-slate-300">
                <li>HTML5 & Semantic Markup</li>
                <li>CSS3, Flexbox, Grid</li>
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>Responsive & Mobile-First Design</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-slate-900/60 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2 text-slate-300">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>RESTful API Design</li>
                <li>MongoDB</li>
                <li>Authentication & Authorization</li>
                <li>Error Handling & Validation</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-slate-900/60 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Tools & Workflow</h3>
              <ul className="space-y-2 text-slate-300">
                <li>Git & GitHub</li>
                <li>Postman</li>
                <li>Vite</li>
                <li>NPM</li>
                <li>VS Code</li>
              </ul>
            </div>

            {/* Professional */}
            <div className="bg-slate-900/60 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">
                Professional Skills
              </h3>
              <ul className="space-y-2 text-slate-300">
                <li>Problem Solving</li>
                <li>Clean & Maintainable Code</li>
                <li>Attention to Detail</li>
                <li>Team Collaboration</li>
                <li>Continuous Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
