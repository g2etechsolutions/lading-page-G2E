import Icon from '@/components/atoms/Icon'

interface WhyUsItemProps {
  icon: string
  title: string
  description: string
}

export default function WhyUsItem({ icon, title, description }: WhyUsItemProps) {
  return (
    <div className="flex gap-6 items-start group">
      <div className="w-12 h-12 rounded-xl bg-surface-variant flex items-center justify-center shrink-0 group-hover:bg-tertiary/20 transition-colors">
        <Icon name={icon} fill className="text-tertiary" />
      </div>
      <div>
        <h4 className="font-headline-lg-mobile text-xl text-on-background mb-2">{title}</h4>
        <p className="font-body-md text-on-surface-variant">{description}</p>
      </div>
    </div>
  )
}
