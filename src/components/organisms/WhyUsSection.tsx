import Image from 'next/image'
import WhyUsItem from '@/components/molecules/WhyUsItem'

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

        {/* Brand image */}
        <div className="relative">
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-primary/15 blur-[60px] rounded-full scale-75" />

          <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-glow">
            {/* Gradient overlay for blend */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent z-10 pointer-events-none" />

            <Image
              src="/hero.png"
              alt="Equipe G2E Tech Solutions — Tecnologia com visão de negócio"
              width={640}
              height={400}
              className="w-full h-auto object-cover"
              priority={false}
            />

            {/* Bottom badge */}
            <div className="absolute bottom-4 left-4 z-20 glass-card px-4 py-2.5 rounded-xl border border-primary/30">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-xs font-semibold text-on-background">Parceiro estratégico do seu negócio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
