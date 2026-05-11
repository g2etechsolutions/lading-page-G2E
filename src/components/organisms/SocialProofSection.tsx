'use client'

import ScrollReveal from '@/components/atoms/ScrollReveal'

const sectors = ['Varejo', 'Saúde', 'Logística', 'Finanças', 'Indústria']

export default function SocialProofSection() {
  return (
    <section className="relative py-12 border-y border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-center text-xs uppercase tracking-[0.2em] text-on-surface-muted mb-8">
            Empresas que já evoluíram com a G2E
          </p>
        </ScrollReveal>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {sectors.map((s, i) => (
            <ScrollReveal key={s} delay={i * 0.1} direction="up">
              <div className="text-lg md:text-xl font-semibold text-on-surface-muted/60 hover:text-primary transition-colors tracking-wide cursor-default">
                {s}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
