import GlassPanel from '@/components/atoms/GlassPanel'
import Icon from '@/components/atoms/Icon'

interface ProcessStepProps {
  number: string
  icon: string
  title: string
  description: string
  active?: boolean
}

export default function ProcessStep({ number, icon, title, description, active = true }: ProcessStepProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative shadow-[0_0_20px_rgba(104,211,255,0.15)] ${active ? 'glass-panel border-tertiary/30' : 'glass-panel bg-surface border-outline-variant/30'}`}
      >
        <div
          className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center font-label-caps text-sm border ${active ? 'bg-surface-variant text-tertiary border-tertiary/20' : 'bg-surface-variant text-on-surface-variant border-outline-variant/20'}`}
        >
          {number}
        </div>
        <Icon
          name={icon}
          className={active ? 'text-tertiary' : 'text-on-surface-variant'}
          size={36}
        />
      </div>
      <h3 className="font-headline-lg-mobile text-2xl text-on-background mb-3">{title}</h3>
      <p className="font-body-md text-on-surface-variant text-sm">{description}</p>
    </div>
  )
}
