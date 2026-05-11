import Icon from '@/components/atoms/Icon'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  highlight?: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="glass-card hover:glass-card-hover group rounded-2xl p-8">
      <div className="w-14 h-14 rounded-xl border border-primary/40 bg-primary/5 flex items-center justify-center mb-6 group-hover:shadow-glow transition-all">
        <Icon name={icon} className="text-primary" size={26} />
      </div>
      <h3 className="text-xl font-bold text-on-background mb-3">{title}</h3>
      <p className="text-on-surface-muted leading-relaxed mb-6">{description}</p>
      <a href="#contato" className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
        Saiba mais
        <Icon name="arrow_forward" size={16} />
      </a>
    </div>
  )
}
