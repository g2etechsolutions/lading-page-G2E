'use client'

import SectionHeading from '@/components/atoms/SectionHeading'
import ScrollReveal from '@/components/atoms/ScrollReveal'
import StaggerContainer, { StaggerItem } from '@/components/atoms/StaggerContainer'
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
        <ScrollReveal>
          <SectionHeading label="O que entregamos">
            Soluções completas para{' '}
            <span className="text-gradient-brand">cada etapa da sua jornada</span>
          </SectionHeading>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.15}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <ServiceCard {...service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
