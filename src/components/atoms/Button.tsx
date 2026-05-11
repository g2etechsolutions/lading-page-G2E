type ButtonVariant = 'cta' | 'primary' | 'outline' | 'ghost'

interface ButtonProps {
  variant?: ButtonVariant
  children: React.ReactNode
  className?: string
  href?: string
}

export default function Button({ variant = 'cta', children, className = '', href }: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-display font-semibold tracking-wide transition-all duration-300 cursor-pointer'

  const variants: Record<ButtonVariant, string> = {
    cta: 'btn-hero px-6 md:px-8 py-3.5 md:py-4 text-sm md:text-base hover:btn-hero-hover hover:-translate-y-0.5 active:translate-y-0',
    primary: 'bg-primary text-background px-6 md:px-7 py-3 md:py-3.5 rounded-md hover:bg-primary-light hover:shadow-glow active:scale-[0.98]',
    outline: 'bg-primary/5 border border-primary/40 text-primary px-6 md:px-7 py-3 md:py-3.5 rounded-xl hover:bg-primary/10 hover:border-primary transition-all',
    ghost: 'text-on-surface-muted px-4 py-2 rounded-md hover:text-on-background hover:bg-surface-elevated',
  }

  const classes = `${baseClasses} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes}>
      {children}
    </button>
  )
}
