interface NavLinkProps {
  href: string
  children: React.ReactNode
  active?: boolean
}

export default function NavLink({ href, children, active = false }: NavLinkProps) {
  if (active) {
    return (
      <a
        href={href}
        className="text-tertiary border-b-2 border-tertiary pb-1 hover:text-tertiary transition-colors duration-300"
      >
        {children}
      </a>
    )
  }

  return (
    <a
      href={href}
      className="text-on-surface-variant hover:text-tertiary transition-colors duration-300"
    >
      {children}
    </a>
  )
}
