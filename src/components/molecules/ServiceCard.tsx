import GlassPanel from '@/components/atoms/GlassPanel'
import Icon from '@/components/atoms/Icon'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <GlassPanel className="p-8 rounded-xl group hover:glass-panel-active transition-all duration-300">
      <div className="w-14 h-14 rounded-lg bg-surface-variant flex items-center justify-center mb-6 group-hover:bg-tertiary/20 transition-colors">
        <Icon name={icon} className="text-tertiary" size={30} />
      </div>
      <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-background mb-4">{title}</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
    </GlassPanel>
  )
}
