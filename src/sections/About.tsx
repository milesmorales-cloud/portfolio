import useRevealOnScroll from '../hooks/useRevealOnScroll'

function About() {
  const { ref, isRevealed } = useRevealOnScroll<HTMLElement>()

  return (
    <section
      id="about"
      ref={ref}
      className={`reveal scroll-mt-24 border-b border-white/10 px-6 py-24 lg:py-32 ${
        isRevealed ? 'is-revealed' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-(--color-accent)">
              01 / About
            </p>

            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Building toward the cloud.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-xl leading-9 text-(--color-text)">
              I’m Israel Japhary, a computer science student focused on
              software development and cloud engineering.
            </p>

            <p className="mt-6 leading-8 text-(--color-muted)">
              I learn by building. My projects have taken me through
              frontend development, APIs, databases, real-time systems,
              deployment, and the tools that connect software to
              infrastructure.
            </p>

            <p className="mt-6 leading-8 text-(--color-muted)">
              My current direction is cloud engineering: understanding
              Linux, Git, containers, networking, AWS, automation, and
              the systems that allow applications to run reliably beyond
              a developer’s machine.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-(--color-surface) p-4">
                <p className="font-mono text-xs text-(--color-accent)">
                  FOCUS
                </p>
                <p className="mt-2 text-sm text-(--color-text)">
                  Cloud Engineering
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-(--color-surface) p-4">
                <p className="font-mono text-xs text-(--color-accent)">
                  APPROACH
                </p>
                <p className="mt-2 text-sm text-(--color-text)">
                  Learn by building
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-(--color-surface) p-4">
                <p className="font-mono text-xs text-(--color-accent)">
                  CURRENT
                </p>
                <p className="mt-2 text-sm text-(--color-text)">
                  Git → Linux → AWS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
