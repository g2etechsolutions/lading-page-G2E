interface GlassPanelProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function GlassPanel({ children, className = '', hover = true }: GlassPanelProps) {
  return (
    <div className={`glass-card ${hover ? 'hover:glass-card-hover' : ''} ${className}`}>
      {children}
    </div>
  )
}
