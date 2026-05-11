'use client'

import { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/atoms/Button'
import NavLink from '@/components/molecules/NavLink'

const links = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Cases', href: '#processo' },
  { label: 'Sobre', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

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

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Button variant="cta" href="#contato" className="hidden md:inline-flex px-6 py-2.5 text-sm">
          Fale Conosco
        </Button>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-on-surface-muted hover:text-primary hover:border-primary/40 transition-all"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${
                isOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                isOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${
                isOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-6 pb-6 pt-2 border-t border-white/5 bg-background/95 backdrop-blur-2xl">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 rounded-lg text-on-surface-muted hover:text-primary hover:bg-primary/5 transition-all text-base font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-white/5">
            <Button variant="cta" href="#contato" className="w-full justify-center py-3.5 text-sm">
              Fale Conosco
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
