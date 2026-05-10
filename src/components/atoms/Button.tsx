type ButtonVariant = 'primary' | 'outline'

interface ButtonProps {
  variant?: ButtonVariant
  children: React.ReactNode
  className?: string
}

export default function Button({ variant = 'primary', children, className = '' }: ButtonProps) {
  if (variant === 'outline') {
    return (
      <button
        className={`bg-transparent border border-tertiary text-tertiary px-8 py-4 rounded font-label-caps text-label-caps uppercase tracking-wider hover:bg-tertiary/10 transition-all duration-300 ${className}`}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      className={`bg-gradient-to-r from-secondary-container to-tertiary text-on-background px-6 py-3 rounded font-label-caps text-label-caps uppercase tracking-wider hover:brightness-110 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  )
}
