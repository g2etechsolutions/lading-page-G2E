const sectors = ['Varejo', 'Saúde', 'Logística', 'Finanças', 'Indústria']

export default function SocialProofSection() {
  return (
    <section className="relative py-12 border-y border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-on-surface-muted mb-8">
          Empresas que já evoluíram com a G2E
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {sectors.map((s) => (
            <div
              key={s}
              className="text-lg md:text-xl font-semibold text-on-surface-muted/60 hover:text-primary transition-colors tracking-wide"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
