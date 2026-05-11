'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/atoms/ScrollReveal'
import Icon from '@/components/atoms/Icon'

const WHATSAPP_NUMBER = '5577981309491'
const WHATSAPP_MESSAGE = 'Olá! Gostaria de agendar um diagnóstico gratuito para minha empresa.'

export default function CtaSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <section id="contato" className="relative py-16 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <ScrollReveal direction="up">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden px-6 py-12 md:px-16 md:py-20 text-center">
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
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full bg-primary/30 blur-[100px]" />

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white">
                Vamos conversar sobre o{' '}
                <span className="text-primary-light">futuro do seu negócio</span>
              </h2>
              <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80 max-w-xl mx-auto">
                Consultoria inicial gratuita. Sem compromisso. Resposta em até 24h.
              </p>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 bg-white text-secondary font-display font-semibold px-8 py-3.5 md:px-10 md:py-4 rounded-xl text-sm md:text-base shadow-lg cursor-pointer w-full sm:w-auto"
                >
                  <Icon name="auto_awesome" size={18} />
                  Agendar Diagnóstico Gratuito
                </motion.a>
              </div>

              {/* Trust signals */}
              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/60 text-xs">
                <span className="flex items-center gap-1.5">
                  <Icon name="verified" size={14} className="text-primary-light" />
                  Sem compromisso
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="bolt" size={14} className="text-primary-light" />
                  Resposta em 24h
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="security" size={14} className="text-primary-light" />
                  Dados protegidos
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
