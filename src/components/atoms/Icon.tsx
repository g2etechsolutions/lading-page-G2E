'use client'

import Cloud from '@mui/icons-material/Cloud'
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import Dns from '@mui/icons-material/Dns'
import SmartToy from '@mui/icons-material/SmartToy'
import Groups from '@mui/icons-material/Groups'
import Dashboard from '@mui/icons-material/Dashboard'
import SupportAgent from '@mui/icons-material/SupportAgent'
import Notifications from '@mui/icons-material/Notifications'
import Speed from '@mui/icons-material/Speed'
import Memory from '@mui/icons-material/Memory'
import Security from '@mui/icons-material/Security'
import Troubleshoot from '@mui/icons-material/Troubleshoot'
import Architecture from '@mui/icons-material/Architecture'
import RocketLaunch from '@mui/icons-material/RocketLaunch'
import TrendingUp from '@mui/icons-material/TrendingUp'
import Storefront from '@mui/icons-material/Storefront'
import HealthAndSafety from '@mui/icons-material/HealthAndSafety'
import LocalShipping from '@mui/icons-material/LocalShipping'
import AccountBalance from '@mui/icons-material/AccountBalance'
import CheckCircle from '@mui/icons-material/CheckCircle'
import ArrowForward from '@mui/icons-material/ArrowForward'
import Star from '@mui/icons-material/Star'
import Bolt from '@mui/icons-material/Bolt'
import Verified from '@mui/icons-material/Verified'
import AutoAwesome from '@mui/icons-material/AutoAwesome'

const iconMap = {
  cloud: Cloud,
  shopping_cart: ShoppingCart,
  dns: Dns,
  smart_toy: SmartToy,
  groups: Groups,
  dashboard_customize: Dashboard,
  support_agent: SupportAgent,
  notifications: Notifications,
  speed: Speed,
  memory: Memory,
  security: Security,
  troubleshoot: Troubleshoot,
  architecture: Architecture,
  rocket_launch: RocketLaunch,
  trending_up: TrendingUp,
  storefront: Storefront,
  health_and_safety: HealthAndSafety,
  local_shipping: LocalShipping,
  account_balance: AccountBalance,
  check_circle: CheckCircle,
  arrow_forward: ArrowForward,
  star: Star,
  bolt: Bolt,
  verified: Verified,
  auto_awesome: AutoAwesome,
} as const

type IconName = keyof typeof iconMap

interface IconProps {
  name: string
  className?: string
  size?: number
}

export default function Icon({ name, className = '', size }: IconProps) {
  const IconComponent = iconMap[name as IconName]
  if (!IconComponent) return null
  return (
    <IconComponent
      className={className}
      style={size ? { fontSize: size } : undefined}
    />
  )
}
