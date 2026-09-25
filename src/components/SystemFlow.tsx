import SystemNode from './SystemNode'

function SystemFlow() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-(--color-surface) p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-(--color-muted)">
            Infrastructure
          </span>

          <p className="mt-1 text-xs text-(--color-muted)">
            Software delivery path
          </p>
        </div>

        <span className="flex items-center gap-2 font-mono text-xs text-(--color-accent)">
          <span
            className="h-2 w-2 animate-pulse rounded-full bg-(--color-accent)"
            aria-hidden="true"
          />
          Operational
        </span>
      </div>

      <div className="space-y-3">
        <SystemNode
          stage="01"
          title="Source Code"
          technologies="React · TypeScript · Git"
        />

        <div
          className="flex h-5 items-center justify-center"
          aria-hidden="true"
        >
          <span className="font-mono text-sm text-(--color-accent)">
            ↓
          </span>
        </div>

        <SystemNode
          stage="02"
          title="Container"
          technologies="Docker · CI/CD"
        />

        <div
          className="flex h-5 items-center justify-center"
          aria-hidden="true"
        >
          <span className="font-mono text-sm text-(--color-accent)">
            ↓
          </span>
        </div>

        <SystemNode
          stage="03"
          title="Cloud"
          technologies="AWS · Infrastructure"
          active
        />
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-(--color-muted)">
          Pipeline
        </span>

        <span className="font-mono text-[10px] text-(--color-muted)">
          READY
        </span>
      </div>
    </div>
  )
}

export default SystemFlow