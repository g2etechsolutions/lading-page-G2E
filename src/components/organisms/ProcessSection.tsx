import SectionHeading from '@/components/atoms/SectionHeading'
import ProcessStep from '@/components/molecules/ProcessStep'

const steps = [
  {
    number: '01',
    icon: 'troubleshoot',
    title: 'Diagnóstico',
    description:
      'Análise profunda da sua infraestrutura atual e identificação de gargalos e oportunidades.',
    active: true,
  },
  {
    number: '02',
    icon: 'architecture',
    title: 'Estratégia',
    description:
      'Desenho da arquitetura ideal, seleção de tecnologias e planejamento do roadmap de implementação.',
    active: true,
  },
  {
    number: '03',
    icon: 'rocket_launch',
    title: 'Execução',
    description:
      'Desenvolvimento, testes, deploy em produção e monitoramento contínuo da solução.',
    active: false,
  },
]

export default function ProcessSection() {
  return (
    <section className="py-24 bg-surface-container-lowest relative border-y border-outline-variant/10">
      <div className="w-full max-w-[1440px] mx-auto px-margin-desktop relative z-10">
        <SectionHeading>Nosso Processo</SectionHeading>
        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant/30 -translate-y-1/2 z-0" />
          <div className="hidden md:block absolute top-1/2 left-0 w-2/3 h-0.5 bg-gradient-to-r from-tertiary to-secondary -translate-y-1/2 z-0 opacity-50" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step) => (
              <ProcessStep key={step.title} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
