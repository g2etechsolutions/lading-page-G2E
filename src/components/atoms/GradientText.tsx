interface GradientTextProps {
  children: React.ReactNode
  glow?: boolean
  className?: string
}

export default function GradientText({ children, glow = false, className = '' }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-tertiary to-secondary bg-clip-text text-transparent ${glow ? 'glow-text' : ''} ${className}`}
    >
      {children}
    </span>
  )
}
