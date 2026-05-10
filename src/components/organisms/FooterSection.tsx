const legalLinks = [
  { label: 'Privacidade', href: '#' },
  { label: 'Termos de Uso', href: '#' },
]

const socialLinks = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
]

export default function FooterSection() {
  return (
    <footer className="w-full px-margin-desktop py-12 flex flex-col md:flex-row justify-between items-start gap-gutter bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="flex flex-col gap-4">
        <div className="font-display-xl text-headline-lg text-on-surface tracking-tight">
          G2E Tech Solutions
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
          Arquitetando Inteligência. Soluções B2B escaláveis para o futuro do seu negócio.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        <ul className="flex flex-col gap-2 font-body-sm text-body-sm">
          {legalLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-on-primary-container hover:text-tertiary transition-all opacity-80 hover:opacity-100"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 font-body-sm text-body-sm">
          {socialLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-on-primary-container hover:text-tertiary transition-all opacity-80 hover:opacity-100"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="font-body-sm text-body-sm text-on-surface-variant mt-8 md:mt-0">
        © 2025 G2E Tech Solutions. Arquitetando Inteligência.
      </div>
    </footer>
  )
}
