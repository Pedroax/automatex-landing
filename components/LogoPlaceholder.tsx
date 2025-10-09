interface LogoPlaceholderProps {
  name: string
  variant?: 'default' | 'fintech' | 'edtech'
  size?: 'sm' | 'md' | 'lg'
  darkTheme?: boolean
}

export default function LogoPlaceholder({
  name,
  variant = 'default',
  size = 'md',
  darkTheme = false
}: LogoPlaceholderProps) {
  const sizeClasses = {
    sm: 'w-20 h-10',
    md: 'w-24 h-12',
    lg: 'w-32 h-16'
  }

  const getLogoSVG = () => {
    const textColor = darkTheme ? "white" : "currentColor"

    switch (variant) {
      case 'fintech':
        return (
          <svg viewBox="0 0 120 48" className={`w-full h-full ${darkTheme ? 'text-white' : 'text-gray-600'}`}>
            {/* Geometric mark */}
            <rect x="8" y="12" width="4" height="24" fill="currentColor" />
            <rect x="14" y="8" width="4" height="32" fill="currentColor" />
            <rect x="20" y="16" width="4" height="16" fill="currentColor" />
            <rect x="26" y="4" width="4" height="40" fill="currentColor" />

            {/* Wordmark */}
            <text x="38" y="30" fontSize="14" fontWeight="600" fill={textColor} fontFamily="system-ui">
              {name}
            </text>
          </svg>
        )

      case 'edtech':
        return (
          <svg viewBox="0 0 120 48" className={`w-full h-full ${darkTheme ? 'text-white' : 'text-gray-600'}`}>
            {/* Geometric mark */}
            <circle cx="18" cy="16" r="3" fill="currentColor" />
            <circle cx="26" cy="16" r="3" fill="currentColor" />
            <circle cx="18" cy="24" r="3" fill="currentColor" />
            <circle cx="26" cy="24" r="3" fill="currentColor" />
            <circle cx="22" cy="32" r="3" fill="currentColor" />

            {/* Wordmark */}
            <text x="38" y="30" fontSize="14" fontWeight="600" fill={textColor} fontFamily="system-ui">
              {name}
            </text>
          </svg>
        )

      default:
        return (
          <svg viewBox="0 0 120 48" className={`w-full h-full ${darkTheme ? 'text-white' : 'text-gray-600'}`}>
            {/* Geometric mark */}
            <polygon points="8,32 18,8 28,32" fill="currentColor" />

            {/* Wordmark */}
            <text x="38" y="30" fontSize="14" fontWeight="600" fill={textColor} fontFamily="system-ui">
              {name}
            </text>
          </svg>
        )
    }
  }

  return (
    <div className={`${sizeClasses[size]} ${darkTheme ? 'bg-transparent' : 'bg-white rounded-lg border border-gray-200'} flex items-center justify-center p-2`}>
      {getLogoSVG()}
    </div>
  )
}