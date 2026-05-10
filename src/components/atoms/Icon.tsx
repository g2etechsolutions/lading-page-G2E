interface IconProps {
  name: string
  fill?: boolean
  className?: string
}

export default function Icon({ name, fill = false, className = '' }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={fill ? { fontVariationSettings: "'FILL' 1" } : undefined}
    >
      {name}
    </span>
  )
}
