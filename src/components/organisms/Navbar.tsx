import Image from 'next/image'
import Button from '@/components/atoms/Button'
import NavLink from '@/components/molecules/NavLink'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Image
          src="/logo.png"
          alt="G2E Tech Solutions"
          width={120}
          height={40}
          className="h-9 w-auto object-contain"
          priority
        />

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li><NavLink href="#solucoes">Soluções</NavLink></li>
            <li><NavLink href="#processo">Cases</NavLink></li>
            <li><NavLink href="#diferenciais">Sobre</NavLink></li>
            <li><NavLink href="#contato">Contato</NavLink></li>
          </ul>
        </nav>

        <Button variant="cta" href="#contato" className="hidden sm:inline-flex px-6 py-2.5 text-sm">
          Fale Conosco
        </Button>
      </div>
    </header>
  )
}
