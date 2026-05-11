interface SectionHeadingProps {
  children: React.ReactNode
  subtitle?: string
  label?: string
  className?: string
}

export default function SectionHeading({ children, subtitle, label, className = '' }: SectionHeadingProps) {
  return (
    <div className={`text-center max-w-2xl mx-auto mb-16 ${className}`}>
      {label && (
        <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">{label}</p>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">{children}</h2>
      {subtitle && (
        <p className="mt-4 text-on-surface-muted text-lg">{subtitle}</p>
      )}
    </div>
  )
}
