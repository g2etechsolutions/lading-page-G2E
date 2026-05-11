'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/atoms/ScrollReveal'
import Icon from '@/components/atoms/Icon'

export default function CtaSection() {
  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal direction="up">
          <div className="relative rounded-3xl overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary-light to-primary opacity-95" />

            {/* Mesh overlay */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern height="40" id="cta-grid" patternUnits="userSpaceOnUse" width="40">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect fill="url(#cta-grid)" height="100%" width="100%" />
              </svg>
            </div>

            {/* Glow orb */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-primary/30 blur-[100px]" />

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Vamos conversar sobre o{' '}
                <span className="text-primary-light">futuro do seu negócio</span>
              </h2>
              <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto">
                Consultoria inicial gratuita. Sem compromisso.
              </p>
              <div className="mt-10">
                <motion.a
                  href="#contato"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 bg-white text-secondary font-display font-semibold px-10 py-4 rounded-xl text-base shadow-lg cursor-pointer"
                >
                  <Icon name="auto_awesome" size={20} />
                  Agendar Diagnóstico Gratuito
                </motion.a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
