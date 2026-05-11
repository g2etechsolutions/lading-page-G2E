import Icon from '@/components/atoms/Icon'

interface ProcessStepProps {
  number: string
  icon: string
  title: string
  description: string
  active?: boolean
}

export default function ProcessStep({ number, icon, title, description }: ProcessStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center group">
      {/* Glowing circle with icon */}
      <div className="relative">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-md scale-125 group-hover:bg-primary/30 transition-all duration-500" />

        {/* Main circle */}
        <div className="relative w-20 h-20 rounded-full bg-surface-elevated border-2 border-primary/50 flex items-center justify-center shadow-glow group-hover:border-primary group-hover:shadow-glow-strong transition-all duration-300">
          <Icon name={icon} className="text-primary" size={32} />
        </div>

        {/* Number badge */}
        <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gradient-brand flex items-center justify-center text-xs font-bold text-white shadow-lg">
          {number}
        </div>
      </div>

      {/* Content */}
      <div className="mt-8 glass-card rounded-xl p-6 w-full group-hover:glass-card-hover transition-all duration-300">
        <h3 className="text-lg font-display font-bold text-on-background mb-2">{title}</h3>
        <p className="text-on-surface-muted text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
