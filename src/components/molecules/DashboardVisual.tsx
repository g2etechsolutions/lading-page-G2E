import Icon from '@/components/atoms/Icon'

export default function DashboardVisual() {
  return (
    <div className="relative glass-card rounded-2xl p-6 border border-primary/20 shadow-glow overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0" />

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center mb-5">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
          <span className="text-xs font-mono text-on-surface-muted">Dashboard G2E</span>
        </div>
        <div className="flex gap-2">
          <div className="w-7 h-7 rounded-lg bg-surface-elevated border border-border flex items-center justify-center">
            <Icon name="notifications" size={14} className="text-on-surface-muted" />
          </div>
        </div>
      </div>

      {/* Metric cards */}
      <div className="relative z-10 grid grid-cols-3 gap-3 mb-5">
        <div className="bg-surface/80 rounded-lg border border-border p-3">
          <div className="flex items-center gap-1.5 mb-2">
            <Icon name="trending_up" className="text-success" size={14} />
            <span className="text-[10px] text-on-surface-muted">Uptime</span>
          </div>
          <span className="text-lg font-bold text-success">99.9%</span>
        </div>
        <div className="bg-surface/80 rounded-lg border border-border p-3">
          <div className="flex items-center gap-1.5 mb-2">
            <Icon name="speed" className="text-primary" size={14} />
            <span className="text-[10px] text-on-surface-muted">Latência</span>
          </div>
          <span className="text-lg font-bold text-primary">12ms</span>
        </div>
        <div className="bg-surface/80 rounded-lg border border-border p-3">
          <div className="flex items-center gap-1.5 mb-2">
            <Icon name="bolt" className="text-warning" size={14} />
            <span className="text-[10px] text-on-surface-muted">Requests</span>
          </div>
          <span className="text-lg font-bold text-warning">2.4k</span>
        </div>
      </div>

      {/* Chart */}
      <div className="relative z-10 bg-surface/50 rounded-xl border border-border p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-mono text-on-surface-muted">Performance (7d)</span>
          <span className="text-xs text-success font-semibold">+23%</span>
        </div>
        <div className="flex items-end gap-1.5 h-32">
          {[30, 45, 35, 55, 50, 70, 85].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-secondary/60 to-primary/80 transition-all hover:to-primary"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
