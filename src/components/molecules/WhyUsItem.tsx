import Icon from '@/components/atoms/Icon'

interface WhyUsItemProps {
  icon: string
  title: string
  description: string
}

export default function WhyUsItem({ icon, title, description }: WhyUsItemProps) {
  return (
    <li className="flex gap-4">
      <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
        <Icon name={icon} className="text-primary" size={20} />
      </div>
      <div>
        <h3 className="font-semibold text-lg text-on-background">{title}</h3>
        <p className="text-on-surface-muted text-sm mt-1">{description}</p>
      </div>
    </li>
  )
}
