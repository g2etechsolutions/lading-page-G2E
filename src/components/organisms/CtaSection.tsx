import Button from '@/components/atoms/Button'

export default function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary-container via-surface to-surface-container-high">
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-tertiary/30 to-transparent" />
      <div className="w-full max-w-[1440px] mx-auto px-margin-desktop relative z-10 text-center">
        <h2 className="font-display-xl text-headline-lg text-on-background mb-8 glow-text">
          Pronto para Evoluir?
        </h2>
        <p className="font-body-md text-xl text-on-surface-variant mb-10 max-w-2xl mx-auto">
          Dê o próximo passo na transformação digital da sua empresa. Fale com nossos especialistas.
        </p>
        <Button
          variant="primary"
          className="px-10 py-5 shadow-[0_0_30px_rgba(104,211,255,0.3)] hover:shadow-[0_0_40px_rgba(104,211,255,0.5)]"
        >
          Agendar Diagnóstico Gratuito
        </Button>
      </div>
    </section>
  )
}
