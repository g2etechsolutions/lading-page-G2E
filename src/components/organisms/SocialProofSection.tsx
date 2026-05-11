'use client'

import ScrollReveal from '@/components/atoms/ScrollReveal'
import Icon from '@/components/atoms/Icon'

const proofs = [
  { icon: 'storefront', label: 'Varejo', detail: 'E-commerce & PDV' },
  { icon: 'health_and_safety', label: 'Saúde', detail: 'Sistemas clínicos' },
  { icon: 'local_shipping', label: 'Logística', detail: 'Rastreio & rotas' },
  { icon: 'account_balance', label: 'Finanças', detail: 'Fintechs & billing' },
  { icon: 'smart_toy', label: 'SaaS', detail: 'Plataformas B2B' },
]

export default function SocialProofSection() {
  return (
    <section className="relative py-10 md:py-14 border-y border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <ScrollReveal>
          <p className="text-center text-xs uppercase tracking-[0.2em] text-on-surface-muted mb-8">
            Setores que já evoluíram com a G2E
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {proofs.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.08} direction="up">
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-surface-elevated/50 hover:border-primary/30 hover:bg-primary/5 transition-all group cursor-default">
                <Icon name={item.icon} className="text-on-surface-muted group-hover:text-primary transition-colors" size={24} />
                <span className="font-display font-semibold text-sm text-on-background">{item.label}</span>
                <span className="text-[10px] text-on-surface-muted">{item.detail}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
