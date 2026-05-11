'use client'

import SectionHeading from '@/components/atoms/SectionHeading'
import ScrollReveal from '@/components/atoms/ScrollReveal'
import StaggerContainer, { StaggerItem } from '@/components/atoms/StaggerContainer'
import ProcessStep from '@/components/molecules/ProcessStep'

const steps = [
  {
    number: '01',
    icon: 'troubleshoot',
    title: 'Diagnóstico',
    description:
      'Analisamos sua operação atual, identificamos gargalos e mapeamos oportunidades de evolução tecnológica.',
    active: true,
  },
  {
    number: '02',
    icon: 'architecture',
    title: 'Estratégia',
    description:
      'Desenhamos a arquitetura ideal, selecionamos tecnologias e criamos o roadmap alinhado às suas metas.',
    active: true,
  },
  {
    number: '03',
    icon: 'rocket_launch',
    title: 'Execução & Suporte',
    description:
      'Implementamos com excelência, fazemos deploy em produção e acompanhamos a evolução contínua.',
    active: true,
  },
]

export default function ProcessSection() {
  return (
    <section id="processo" className="relative py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-6">
        <ScrollReveal>
          <SectionHeading label="Como trabalhamos">
            Um processo claro, do{' '}
            <span className="text-gradient-brand">diagnóstico ao resultado</span>
          </SectionHeading>
        </ScrollReveal>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline connector line */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+2.5rem)] right-[calc(16.66%+2.5rem)] h-0.5 z-0">
            <div className="w-full h-full bg-gradient-to-r from-primary/60 via-primary/40 to-primary/60 rounded-full" />
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10" staggerDelay={0.2}>
            {steps.map((step) => (
              <StaggerItem key={step.title}>
                <ProcessStep {...step} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <ScrollReveal delay={0.6}>
          <div className="text-center mt-14">
            <p className="text-on-surface-muted text-sm">
              O primeiro passo é gratuito.{' '}
              <a
                href="#contato"
                className="text-primary font-semibold hover:text-primary-light transition-colors underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
              >
                Agende seu diagnóstico →
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
