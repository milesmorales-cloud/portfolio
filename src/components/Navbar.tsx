function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-(--color-bg)/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href="#home"
          className="font-mono text-sm font-semibold tracking-wide text-(var(--color-text))"
        >
          <span
            className="text-(var(--color-accent))"
            aria-hidden="true"
          >
            &gt;_
          </span>
          {' '}
          ISRAEL
          <span className="text-(var(--color-accent))">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-sm text-(var(--color-muted)) transition-colors hover:text-(var(--color-text))"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-sm text-(var(--color-muted)) transition-colors hover:text-(var(--color-text))"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="text-sm text-(var(--color-muted)) transition-colors hover:text-(var(--color-text))"
          >
            Skills
          </a>

          <a
            href="#contact"
            className="text-sm text-(var(--color-muted)) transition-colors hover:text-(var(--color-text))"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar