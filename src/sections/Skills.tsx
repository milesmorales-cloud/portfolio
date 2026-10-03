import useRevealOnScroll from '../hooks/useRevealOnScroll'

const skillGroups = [
  {
    category: 'Development',
    description: 'Tools I use to build applications.',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Python', 'Java'],
  },
  {
    category: 'Backend & Data',
    description: 'Application interfaces and persistent data.',
    skills: ['REST APIs', 'WebSockets', 'PostgreSQL', 'SQLite', 'Spring Boot'],
  },
  {
    category: 'Engineering Tools',
    description: 'Tools that support development and delivery.',
    skills: ['Git', 'GitHub', 'Linux', 'Docker', 'Postman', 'Maven'],
  },
  {
    category: 'Cloud Direction',
    description: 'Technologies I am actively learning.',
    skills: ['AWS', 'Terraform', 'CI/CD', 'Cloud Infrastructure'],
  },
]

function Skills() {
  const { ref, isRevealed } = useRevealOnScroll<HTMLElement>()

  return (
    <section
      id="skills"
      ref={ref}
      className={`reveal scroll-mt-24 border-b border-white/10 px-6 py-24 lg:py-32 ${
        isRevealed ? 'is-revealed' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-(--color-accent)">
            03 / Skills
          </p>

          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Tools behind the work.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-(--color-muted)">
            A growing toolkit shaped by projects, coursework, and my
            progression toward cloud engineering.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.category}
              className="rounded-2xl border border-white/10 bg-(--color-surface) p-6 transition-colors hover:border-white/20"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    {group.category}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-(--color-muted)">
                    {group.description}
                  </p>
                </div>

                <span className="font-mono text-[10px] uppercase tracking-wider text-(--color-accent)">
                  Toolkit
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/10 px-3 py-1.5 font-mono text-[11px] text-(--color-muted)"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
