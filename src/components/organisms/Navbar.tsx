import Button from '@/components/atoms/Button'
import NavLink from '@/components/molecules/NavLink'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-desktop py-4 bg-background/80 backdrop-blur-xl border-b border-outline-variant/20">
      <div className="font-display-xl text-headline-lg bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent tracking-tight">
        G2E Tech Solutions
      </div>
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex items-center gap-6 font-body-md text-body-md">
          <li><NavLink href="#" active>Soluções</NavLink></li>
          <li><NavLink href="#">Cases</NavLink></li>
          <li><NavLink href="#">Sobre</NavLink></li>
          <li><NavLink href="#">Contato</NavLink></li>
        </ul>
        <Button variant="primary">Agendar Diagnóstico</Button>
      </div>
    </nav>
  )
}
