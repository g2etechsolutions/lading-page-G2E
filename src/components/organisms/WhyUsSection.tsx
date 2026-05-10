import DashboardVisual from '@/components/molecules/DashboardVisual'
import WhyUsItem from '@/components/molecules/WhyUsItem'

const items = [
  {
    icon: 'groups',
    title: 'Equipe técnica especializada',
    description:
      'Profissionais altamente qualificados com anos de experiência em arquitetura de software e infraestrutura.',
  },
  {
    icon: 'dashboard_customize',
    title: 'Soluções sob medida',
    description:
      'Desenvolvemos arquiteturas que se adaptam exatamente ao tamanho e à necessidade do seu negócio.',
  },
  {
    icon: 'support_agent',
    title: 'Suporte contínuo',
    description:
      'Acompanhamento de ponta a ponta, garantindo que suas operações nunca parem e evoluam constantemente.',
  },
]

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display-xl text-headline-lg text-on-background mb-4">
              Por que a G2E?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-secondary to-tertiary rounded mb-12" />
            <div className="space-y-8">
              {items.map((item) => (
                <WhyUsItem key={item.title} {...item} />
              ))}
            </div>
          </div>
          <DashboardVisual />
        </div>
      </div>
    </section>
  )
}
