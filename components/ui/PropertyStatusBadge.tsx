'use client'

interface PropertyStatusBadgeProps {
  status: 'for-sale' | 'under-contract' | 'sold' | 'featured' | 'new'
  className?: string
}

export function PropertyStatusBadge({ status, className = '' }: PropertyStatusBadgeProps) {
  const statusConfig = {
    'for-sale': {
      label: 'For Sale',
      classes: 'bg-[#C9A227] text-white'
    },
    'under-contract': {
      label: 'Under Contract',
      classes: 'bg-amber-500 text-white'
    },
    'sold': {
      label: 'Sold',
      classes: 'bg-gray-500 text-white'
    },
    'featured': {
      label: 'Featured',
      classes: 'bg-[#C9A227] text-white'
    },
    'new': {
      label: 'New Listing',
      classes: 'bg-green-500 text-white'
    }
  }

  const config = statusConfig[status]

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${config.classes} ${className}`}>
      {config.label}
    </span>
  )
}
