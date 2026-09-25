type SystemNodeProps = {
  stage: string
  title: string
  technologies: string
  active?: boolean
}

function SystemNode({
  stage,
  title,
  technologies,
  active = false,
}: SystemNodeProps) {
  return (
    <div
      className={`group rounded-lg border p-4 transition-all duration-200 hover:-translate-y-0.5 ${
        active
          ? 'border-(--color-accent)/30 bg-(--color-elevated)'
          : 'border-white/10 bg-(--color-elevated) hover:border-white/20'
      }`}
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-[10px] tracking-wider text-(--color-muted)">
          {stage}
        </span>

        {active && (
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-(--color-accent)">
            <span
              className="h-1.5 w-1.5 rounded-full bg-(--color-accent) animate-pulse"
              aria-hidden="true"
            />
            Active
          </span>
        )}
      </div>

      <div className="mt-3">
        <p className="font-medium text-(--color-text)">
          {title}
        </p>

        <p className="mt-1 font-mono text-[11px] text-(--color-muted)">
          {technologies}
        </p>
      </div>

      <div
        className={`mt-4 h-px transition-all duration-300 ${
          active
            ? 'w-full bg-(--color-accent)/30'
            : 'w-8 bg-white/10 group-hover:w-16'
        }`}
        aria-hidden="true"
      />
    </div>
  )
}

export default SystemNode