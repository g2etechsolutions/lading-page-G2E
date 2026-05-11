'use client'

import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import GradientText from '@/components/atoms/GradientText'
import CityVisual from '@/components/molecules/CityVisual'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-40 md:pb-32">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-grid opacity-60" />
      <div className="absolute inset-0 particles-bg opacity-70" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] rounded-full bg-secondary/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: Copy */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-[11px] md:text-xs text-primary mb-4 md:mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Dados · Estratégia · Tecnologia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
          >
            Transformamos negócios com{' '}
            <GradientText>dados, estratégia e tecnologia</GradientText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 md:mt-6 text-base md:text-lg text-on-surface-muted max-w-xl"
          >
            Inovação, inteligência de dados e automação estratégica para empresas que constroem o futuro — com escalabilidade real.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button variant="cta" href="https://wa.me/5577981309491?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20G2E%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20voc%C3%AAs." className="w-full sm:w-auto text-center">
              Fale com um Especialista →
            </Button>
            <Button variant="outline" href="#solucoes" className="w-full sm:w-auto text-center">
              Conheça Nossas Soluções
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 md:mt-12 grid grid-cols-3 gap-4 md:gap-6 max-w-sm md:max-w-md"
          >
            {[
              { value: '+120', label: 'Projetos entregues' },
              { value: '98%', label: 'Clientes satisfeitos' },
              { value: '24/7', label: 'Suporte contínuo' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl md:text-2xl font-bold text-gradient-brand">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-on-surface-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: City Visual — hidden on small mobile, shown from md */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative animate-float hidden md:block"
        >
          <div className="absolute inset-0 bg-primary/15 blur-[80px] rounded-full" />
          <CityVisual />
        </motion.div>
      </div>
    </section>
  )
}
