import SectionHeading from '@/components/atoms/SectionHeading'
import ServiceCard from '@/components/molecules/ServiceCard'

const services = [
  {
    icon: 'cloud',
    title: 'Soluções em Nuvem',
    description:
      'AWS, Azure e GCP. Migração, escalabilidade e redução de custos com arquitetura cloud-native.',
  },
  {
    icon: 'shopping_cart',
    title: 'E-commerce',
    description:
      'Lojas digitais de alta performance com integração de pagamento, logística e CRM.',
  },
  {
    icon: 'dns',
    title: 'Infraestrutura Web',
    description:
      'Servidores, redes, segurança e monitoramento 24/7 para operações sempre no ar.',
  },
  {
    icon: 'smart_toy',
    title: 'Chatbots com IA',
    description:
      'Atendimento automatizado inteligente para WhatsApp, site e aplicativos.',
  },
]

export default function SolutionsSection() {
  return (
    <section id="solucoes" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading label="O que entregamos">
          Soluções completas para{' '}
          <span className="text-gradient-brand">cada etapa da sua jornada</span>
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
