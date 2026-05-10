interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
}

export default function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="font-display-xl text-headline-lg text-on-background mb-4">{children}</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-secondary to-tertiary mx-auto rounded" />
    </div>
  )
}
