import WhyUsItem from '@/components/molecules/WhyUsItem'
import DashboardVisual from '@/components/molecules/DashboardVisual'

const items = [
  {
    icon: 'groups',
    title: 'Equipe técnica especializada',
    description:
      'Engenheiros, arquitetos cloud e cientistas de dados certificados.',
  },
  {
    icon: 'dashboard_customize',
    title: 'Soluções sob medida',
    description:
      'Cada projeto desenhado para o contexto e os objetivos do seu negócio.',
  },
  {
    icon: 'support_agent',
    title: 'Suporte contínuo',
    description:
      'Parceria de longo prazo, com SLA claro e monitoramento proativo.',
  },
]

export default function WhyUsSection() {
  return (
    <section id="diferenciais" className="relative py-24 md:py-32 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Por que a G2E?</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-10">
            Tecnologia com{' '}
            <span className="text-gradient-brand">visão de negócio</span>
          </h2>
          <ul className="space-y-6">
            {items.map((item) => (
              <WhyUsItem key={item.title} {...item} />
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-secondary/20 blur-[80px] rounded-full" />
          <DashboardVisual />
        </div>
      </div>
    </section>
  )
}
