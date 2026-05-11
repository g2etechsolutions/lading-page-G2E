import Image from 'next/image'
import Button from '@/components/atoms/Button'
import GlassPanel from '@/components/atoms/GlassPanel'
import GradientText from '@/components/atoms/GradientText'
import Icon from '@/components/atoms/Icon'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-mesh">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#68d3ff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect fill="url(#grid)" height="100%" width="100%" />
        </svg>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-display-xl text-display-xl text-on-background leading-tight">
              Transforme Seu Negócio com{' '}
              <GradientText glow>Tecnologia de Verdade</GradientText>
            </h1>
            <p className="font-body-md text-headline-lg-mobile text-tertiary max-w-2xl">
              Soluções em Nuvem, E-commerce, Infraestrutura e Chatbots com IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="primary"
                className="px-8 py-4 shadow-[0_0_20px_rgba(104,211,255,0.2)]"
              >
                Fale com um Especialista
              </Button>
              <Button variant="outline" className="px-8 py-4">
                Conheça Nossas Soluções
              </Button>
            </div>
          </div>

          <div className="relative h-[600px] w-full hidden lg:block">
            <GlassPanel className="absolute inset-0 rounded-xl overflow-hidden flex items-center justify-center group relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-lowest/80 to-transparent z-10 pointer-events-none" />
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwPX9DOloZ4RqenhASb9FjqdmP1OP0e8DFzAUBmXST0mkqoDfnN-499cnZQ16kIMfCt3v38BhNwlwI9at0gmxiv63yGrzdcmFIKbIgm3_YVbRlLi271BH2Pdxd6JZHCo02u6VlW1DtArn42qaEQ7acAZ1nsVXIDlO5EIUtOjmrddV4inw5oN_ElSyOqXxE3w5C1RtXmy-1M6bF2uJ8gvwa1r8XCNr2KYvurZS-sEJB01YE9KigZFv1JJCfdOtt68LTOL2EOuNdhRI"
                alt="3D holographic data grid"
                width={800}
                height={600}
                className="w-full h-full object-cover opacity-60 mix-blend-screen"
              />
              <div className="absolute top-10 right-10 z-20 glass-panel p-4 rounded-lg animate-pulse">
                <Icon name="trending_up" className="text-tertiary" size={30} />
              </div>
              <div className="absolute bottom-20 left-10 z-20 glass-panel p-4 rounded-lg">
                <div className="h-2 w-24 bg-tertiary/30 rounded overflow-hidden">
                  <div className="h-full w-3/4 bg-tertiary rounded" />
                </div>
              </div>
            </GlassPanel>
          </div>
        </div>
      </div>
    </section>
  )
}
