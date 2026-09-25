const projects = [
  {
    number: '01',
    name: 'QuizLive',
    type: 'Real-time quiz platform',
    description:
    'A Kahoot-style quiz platform built with vanilla web technologies, real-time communication, a REST API, and SQLite. The project took the application from local development through deployment on Render.',
    stack: ['HTML', 'CSS', 'JavaScript', 'REST API', 'WebSockets', 'SQLite', 'Render'],
    status: 'Deployed',
    url: 'https://quizlive-jmpp.onrender.com',
  },
  {
    number: '02',
    name: 'Miles Assistant',
    type: 'AI-powered application',
    description:
      'A Python application exploring AI providers, API integration, configuration management, and modular provider architecture.',
    stack: ['Python', 'APIs', 'AI', 'Git'],
    status: 'Built',
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-b border-white/10 px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-(--color-accent)">
            02 / Projects
          </p>

          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Built, tested, deployed.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-(--color-muted)">
            Projects are where I turn concepts into working systems and
            learn what happens beyond the code.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group rounded-2xl border border-white/10 bg-(--color-surface) p-6 transition-colors hover:border-white/20 sm:p-8"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-(--color-accent)">
                      {project.number}
                    </span>

                    <span className="h-px w-6 bg-white/10" />

                    <span className="font-mono text-xs uppercase tracking-wider text-(--color-muted)">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="font-display mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {project.name}
                  </h3>

                  <p className="mt-4 leading-7 text-(--color-muted)">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-white/10 px-2.5 py-1 font-mono text-[10px] text-(--color-muted)"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-4">
                  <span className="flex items-center gap-2 font-mono text-xs text-(--color-accent)">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-(--color-accent)"
                      aria-hidden="true"
                    />
                    {project.status}
                  </span>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium transition-colors hover:border-white/25"
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
