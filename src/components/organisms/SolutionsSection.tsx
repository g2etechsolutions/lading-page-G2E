import SectionHeading from '@/components/atoms/SectionHeading'
import ServiceCard from '@/components/molecules/ServiceCard'

const services = [
  {
    icon: 'cloud',
    title: 'Soluções em Nuvem',
    description:
      'Arquitetura escalável e resiliente em AWS e Azure, otimizando custos e garantindo alta disponibilidade para operações críticas.',
  },
  {
    icon: 'shopping_cart',
    title: 'E-commerce',
    description:
      'Plataformas de alta performance construídas para conversão, com integrações robustas e experiências de usuário fluidas.',
  },
  {
    icon: 'dns',
    title: 'Infraestrutura Web',
    description:
      'Segurança 24/7 e gestão de servidores, garantindo que seu ecossistema digital permaneça rápido, seguro e online.',
  },
  {
    icon: 'smart_toy',
    title: 'Chatbots com IA',
    description:
      'Automação inteligente de atendimento via WhatsApp e Web, reduzindo custos operacionais e melhorando a satisfação do cliente.',
  },
]

export default function SolutionsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary-container/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="w-full max-w-[1440px] mx-auto px-margin-desktop relative z-10">
        <SectionHeading>O Que Entregamos</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
