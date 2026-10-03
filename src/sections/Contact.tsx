import useRevealOnScroll from '../hooks/useRevealOnScroll'

const contacts = [
  {
    label: 'GitHub',
    value: 'milesmorales-cloud',
    href: 'https://github.com/milesmorales-cloud',
    external: true,
  },
  {
    label: 'Email',
    value: 'israeljaphary382@gmail.com',
    href: 'mailto:israeljaphary382@gmail.com',
    external: false,
  },
  {
    label: 'WhatsApp',
    value: 'Message me',
    href: 'https://wa.me/255685778722',
    external: true,
  },
  {
  label: 'Instagram',
  value: '@m.i.l.e.s.m.o.r.a.l.e.s',
  href: 'https://www.instagram.com/m.i.l.e.s.m.o.r.a.l.e.s/',
  external: true,
},
]

function Contact() {
  const { ref, isRevealed } = useRevealOnScroll<HTMLElement>()

  return (
    <section
      id="contact"
      ref={ref}
      className={`reveal scroll-mt-24 px-6 py-24 lg:py-32 ${
        isRevealed ? 'is-revealed' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-(--color-accent)">
              04 / Contact
            </p>

            <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s build something.
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-(--color-muted)">
              I&apos;m open to internships, software projects,
              collaborations, and opportunities to keep learning through
              real engineering work.
            </p>
          </div>

          <div className="grid gap-3">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.external ? '_blank' : undefined}
                rel={contact.external ? 'noreferrer' : undefined}
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-(--color-surface) px-5 py-4 transition-colors hover:border-white/25"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-(--color-accent)">
                    {contact.label}
                  </p>

                  <p className="mt-1 text-sm text-(--color-text)">
                    {contact.value}
                  </p>
                </div>

                <span
                  className="font-mono text-sm text-(--color-muted) transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
