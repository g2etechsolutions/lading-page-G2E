import Button from '@/components/atoms/Button'
import Icon from '@/components/atoms/Icon'

export default function CtaSection() {
  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-cta" />
      <div className="absolute inset-0 mesh-grid opacity-40" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Vamos conversar sobre o{' '}
          <span className="text-gradient-brand">futuro do seu negócio</span>
        </h2>
        <p className="mt-6 text-lg text-on-surface-muted">
          Consultoria inicial gratuita. Sem compromisso.
        </p>
        <div className="mt-10">
          <Button variant="cta" href="#contato" className="px-12 py-5 text-lg">
            <Icon name="auto_awesome" size={20} />
            Agendar Diagnóstico Gratuito
          </Button>
        </div>
      </div>
    </section>
  )
}
