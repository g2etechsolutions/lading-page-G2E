interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export default function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`text-gradient-brand ${className}`}>
      {children}
    </span>
  )
}
