import React from 'react'
export type StatusVariant = 'success' | 'warning' | 'danger' | 'neutral'
interface StatusBadgeProps {
  status: string
  variant: StatusVariant
}
export function StatusBadge({ status, variant }: StatusBadgeProps) {
  const variants = {
    success: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    warning: 'bg-amber-100 text-amber-700 border-amber-200',
    danger: 'bg-red-100 text-red-700 border-red-200',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200',
  }
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variants[variant]}`}
    >
      {status}
    </span>
  )
}
