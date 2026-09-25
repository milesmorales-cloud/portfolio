function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-(--color-muted)">
          © {new Date().getFullYear()} Israel Japhary
        </p>

        <div className="flex items-center gap-2 font-mono text-xs text-(--color-muted)">
          <span
            className="h-1.5 w-1.5 rounded-full bg-(--color-accent)"
            aria-hidden="true"
          />

          <span>Building toward the cloud</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
