interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-sm text-on-surface-muted hover:text-primary transition-colors"
    >
      {children}
    </a>
  )
}
