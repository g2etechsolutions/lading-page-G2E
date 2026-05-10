interface GlassPanelProps {
  children: React.ReactNode
  className?: string
  active?: boolean
}

export default function GlassPanel({ children, className = '', active = false }: GlassPanelProps) {
  return (
    <div className={`${active ? 'glass-panel-active' : 'glass-panel'} ${className}`}>
      {children}
    </div>
  )
}
