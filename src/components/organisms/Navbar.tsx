'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Button from '@/components/atoms/Button'
import NavLink from '@/components/molecules/NavLink'
import ThemeToggle from '@/components/atoms/ThemeToggle'

const links = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Cases', href: '#processo' },
  { label: 'Sobre', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const logoSrc = mounted && resolvedTheme === 'dark' ? '/logotipobranco.png' : '/logo.png'

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
        {/* Logo */}
        <Image
          src={logoSrc}
          alt="G2E Tech Solutions"
          width={100}
          height={32}
          className="h-7 md:h-9 w-auto object-contain"
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

        {/* Desktop: Theme toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button variant="cta" href="#contato" className="px-6 py-2.5 text-sm">
            Agendar Diagnóstico
          </Button>
        </div>

        {/* Mobile: Theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-9 h-9 flex items-center justify-center rounded-lg border border-border bg-surface-elevated text-on-surface-muted hover:text-primary hover:border-border-hover transition-all"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            <div className="w-4.5 h-3.5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${
                  isOpen ? 'rotate-45 translate-y-[6px]' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                  isOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${
                  isOpen ? '-rotate-45 -translate-y-[6px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 pb-5 pt-2 border-t border-border bg-background/95 backdrop-blur-2xl">
          <ul className="flex flex-col gap-0.5">
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

          <div className="mt-3 pt-3 border-t border-border">
            <Button variant="cta" href="#contato" className="w-full justify-center py-3 text-sm">
              Agendar Diagnóstico
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
