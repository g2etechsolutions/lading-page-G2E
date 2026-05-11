import Button from '@/components/atoms/Button'
import GradientText from '@/components/atoms/GradientText'
import CityVisual from '@/components/molecules/CityVisual'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-grid opacity-60" />
      <div className="absolute inset-0 particles-bg opacity-70" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-secondary/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Copy */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs text-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Estratégia · Inovação · Tecnologia
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Transforme Seu Negócio com{' '}
            <GradientText>Tecnologia de Verdade</GradientText>
          </h1>

          <p className="mt-6 text-lg text-primary/90 max-w-xl">
            Soluções em Nuvem, E-commerce, Infraestrutura e Chatbots com IA — sob medida para empresas que querem evoluir.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="cta" href="#contato">
              Fale com um Especialista →
            </Button>
            <Button variant="outline" href="#solucoes">
              Conheça Nossas Soluções
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { value: '+120', label: 'Projetos entregues' },
              { value: '98%', label: 'Clientes satisfeitos' },
              { value: '24/7', label: 'Suporte contínuo' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-gradient-brand">{stat.value}</div>
                <div className="text-xs text-on-surface-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: City Visual */}
        <div className="relative animate-float">
          {/* Glow behind */}
          <div className="absolute inset-0 bg-primary/15 blur-[80px] rounded-full" />
          <CityVisual />
        </div>
      </div>
    </section>
  )
}
