'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/atoms/ScrollReveal'
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
    <section id="diferenciais" className="relative py-16 md:py-32 border-y border-border">
      <div className="mx-auto max-w-7xl px-5 md:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <ScrollReveal direction="up">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3 md:mb-4">Por que a G2E?</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-8 md:mb-10">
              Tecnologia com{' '}
              <span className="text-gradient-brand">visão de negócio</span>
            </h2>
          </ScrollReveal>

          <ul className="space-y-5 md:space-y-6">
            {items.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15} direction="up">
                <WhyUsItem {...item} />
              </ScrollReveal>
            ))}
          </ul>
        </div>

        {/* Brand image */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-primary/15 blur-[60px] rounded-full scale-75 hidden md:block" />

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-xl md:rounded-2xl overflow-hidden border border-primary/20 shadow-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10 pointer-events-none" />

              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/hero.png`}
                alt="Equipe G2E Tech Solutions — Tecnologia com visão de negócio"
                width={640}
                height={400}
                className="w-full h-auto object-cover aspect-[16/10]"
              />

              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 z-20 glass-card px-3 py-2 md:px-4 md:py-2.5 rounded-lg md:rounded-xl border border-primary/30">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-[11px] md:text-xs font-semibold text-on-background">Parceiro estratégico do seu negócio</span>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
