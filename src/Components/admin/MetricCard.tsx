import React from 'react'
import { TrendingUpIcon, TrendingDownIcon } from 'lucide-react'
interface MetricCardProps {
  title: string
  value: string
  icon: React.ReactNode
  trend?: {
    value: number
    isPositive: boolean
  }
  isLoading?: boolean
}
export function MetricCard({
  title,
  value,
  icon,
  trend,
  isLoading,
}: MetricCardProps) {
  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 animate-pulse">
        <div className="flex items-center justify-between mb-4">
          <div className="h-4 bg-slate-200 rounded w-24"></div>
          <div className="h-10 w-10 bg-slate-200 rounded-lg"></div>
        </div>
        <div className="h-8 bg-slate-200 rounded w-32 mb-2"></div>
        <div className="h-4 bg-slate-200 rounded w-20"></div>
      </div>
    )
  }
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-slate-500">{title}</h3>
        <div className="p-2 bg-slate-50 rounded-lg text-slate-600">{icon}</div>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-slate-900">{value}</span>
      </div>
      {trend && (
        <div
          className={`flex items-center mt-2 text-sm ${trend.isPositive ? 'text-emerald-600' : 'text-red-600'}`}
        >
          {trend.isPositive ? (
            <TrendingUpIcon className="w-4 h-4 mr-1" />
          ) : (
            <TrendingDownIcon className="w-4 h-4 mr-1" />
          )}
          <span className="font-medium">{Math.abs(trend.value)}%</span>
          <span className="text-slate-500 ml-1">vs last month</span>
        </div>
      )}
    </div>
  )
}
