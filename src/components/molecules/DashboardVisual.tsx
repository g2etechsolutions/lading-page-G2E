import Icon from '@/components/atoms/Icon'

export default function DashboardVisual() {
  return (
    <div className="relative h-[500px] w-full rounded-2xl glass-panel p-8 flex flex-col gap-4 overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-secondary/5 z-0" />

      <div className="relative z-10 flex justify-between items-center mb-4">
        <div className="w-32 h-6 bg-surface-variant rounded-md animate-pulse" />
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full bg-surface-variant" />
          <div className="w-8 h-8 rounded-full bg-tertiary/20 text-tertiary flex items-center justify-center">
            <Icon name="notifications" className="text-sm" />
          </div>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-3 gap-4 mb-4">
        <div className="h-24 bg-surface-variant/50 rounded-xl border border-outline-variant/20 p-4 flex flex-col justify-between group-hover:border-tertiary/30 transition-colors">
          <div className="w-8 h-8 rounded bg-tertiary/10 flex items-center justify-center mb-2">
            <Icon name="speed" className="text-tertiary text-sm" />
          </div>
          <div className="w-1/2 h-3 bg-tertiary rounded" />
        </div>
        <div className="h-24 bg-surface-variant/50 rounded-xl border border-outline-variant/20 p-4 flex flex-col justify-between group-hover:border-tertiary/30 transition-colors">
          <div className="w-8 h-8 rounded bg-secondary/10 flex items-center justify-center mb-2">
            <Icon name="memory" className="text-secondary text-sm" />
          </div>
          <div className="w-2/3 h-3 bg-secondary rounded" />
        </div>
        <div className="h-24 bg-surface-variant/50 rounded-xl border border-outline-variant/20 p-4 flex flex-col justify-between group-hover:border-tertiary/30 transition-colors">
          <div className="w-8 h-8 rounded bg-tertiary/10 flex items-center justify-center mb-2">
            <Icon name="security" className="text-tertiary text-sm" />
          </div>
          <div className="w-3/4 h-3 bg-tertiary rounded" />
        </div>
      </div>

      <div className="relative z-10 flex-1 bg-surface-variant/30 rounded-xl border border-outline-variant/20 flex items-end p-6 gap-2 group-hover:border-tertiary/20 transition-colors">
        {[
          { height: '20%', color: 'bg-tertiary' },
          { height: '35%', color: 'bg-tertiary' },
          { height: '25%', color: 'bg-tertiary' },
          { height: '50%', color: 'bg-tertiary' },
          { height: '40%', color: 'bg-tertiary' },
          { height: '70%', color: 'bg-secondary' },
          { height: '85%', color: 'bg-tertiary' },
        ].map((bar, i) => (
          <div
            key={i}
            className={`w-full rounded-t-sm relative overflow-hidden`}
            style={{ height: bar.height, backgroundColor: 'rgba(104, 211, 255, 0.2)' }}
          >
            <div className={`absolute bottom-0 w-full h-full ${bar.color} animate-pulse`} />
          </div>
        ))}
      </div>
    </div>
  )
}
