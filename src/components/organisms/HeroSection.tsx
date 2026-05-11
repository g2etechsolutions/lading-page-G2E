'use client'

import { motion } from 'framer-motion'
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs text-primary mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Dados · Estratégia · Tecnologia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]"
          >
            Transformamos negócios com{' '}
            <GradientText>dados, estratégia e tecnologia</GradientText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-lg text-on-surface-muted max-w-xl"
          >
            Inovação, inteligência de dados e automação estratégica para empresas que constroem o futuro — com escalabilidade real.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button variant="cta" href="#contato">
              Fale com um Especialista →
            </Button>
            <Button variant="outline" href="#solucoes">
              Conheça Nossas Soluções
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md"
          >
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
          </motion.div>
        </div>

        {/* Right: City Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative animate-float"
        >
          <div className="absolute inset-0 bg-primary/15 blur-[80px] rounded-full" />
          <CityVisual />
        </motion.div>
      </div>
    </section>
  )
}
