"use client"
import React from 'react'
import {
  DollarSignIcon,
  WalletIcon as LucideWalletIcon,
  CheckCircle2Icon,
  MessageSquareIcon as LucideMessageSquareIcon,
  UsersIcon as LucideUsersIcon,
  ArrowUpRightIcon,
} from 'lucide-react'
import { MetricCard } from '@/Components/admin/MetricCard'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts'
const smsData = [
  {
    name: 'Mon',
    volume: 8400,
  },
  {
    name: 'Tue',
    volume: 10200,
  },
  {
    name: 'Wed',
    volume: 9500,
  },
  {
    name: 'Thu',
    volume: 12847,
  },
  {
    name: 'Fri',
    volume: 11000,
  },
  {
    name: 'Sat',
    volume: 6500,
  },
  {
    name: 'Sun',
    volume: 7200,
  },
]
const revenueData = [
  {
    name: 'Mon',
    revenue: 150000,
  },
  {
    name: 'Tue',
    revenue: 280000,
  },
  {
    name: 'Wed',
    revenue: 190000,
  },
  {
    name: 'Thu',
    revenue: 350000,
  },
  {
    name: 'Fri',
    revenue: 220000,
  },
  {
    name: 'Sat',
    revenue: 90000,
  },
  {
    name: 'Sun',
    revenue: 110000,
  },
]
const recentActivity = [
  {
    id: 1,
    type: 'signup',
    user: 'Chidi Okeke',
    time: '10 mins ago',
    desc: 'Created a new account',
  },
  {
    id: 2,
    type: 'payment',
    user: 'TechCorp Ltd',
    time: '25 mins ago',
    desc: 'Funded wallet with ₦50,000',
  },
  {
    id: 3,
    type: 'sms',
    user: 'Ngozi Adebayo',
    time: '1 hour ago',
    desc: 'Sent broadcast to 2,500 contacts',
  },
  {
    id: 4,
    type: 'payment',
    user: 'Oluwaseun Ventures',
    time: '2 hours ago',
    desc: 'Funded wallet with ₦100,000',
  },
  {
    id: 5,
    type: 'signup',
    user: 'Amina Bello',
    time: '3 hours ago',
    desc: 'Created a new account',
  },
]
export default function Overview() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Dashboard Overview
        </h1>
        <p className="text-slate-500 mt-1">
          Welcome back. Here's what's happening today.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <MetricCard
          title="Total Revenue"
          value="₦2,450,000"
          icon={<DollarSignIcon className="w-5 h-5" />}
          trend={{
            value: 12.5,
            isPositive: true,
          }}
        />
        <MetricCard
          title="Wallet Liability"
          value="₦890,000"
          icon={<LucideWalletIcon className="w-5 h-5" />}
          trend={{
            value: 4.2,
            isPositive: false,
          }}
        />
        <MetricCard
          title="Success Rate"
          value="94.2%"
          icon={<CheckCircle2Icon className="w-5 h-5" />}
          trend={{
            value: 1.1,
            isPositive: true,
          }}
        />
        <MetricCard
          title="Today's SMS"
          value="12,847"
          icon={<LucideMessageSquareIcon className="w-5 h-5" />}
          trend={{
            value: 18.2,
            isPositive: true,
          }}
        />
        <MetricCard
          title="Total Users"
          value="3,241"
          icon={<LucideUsersIcon className="w-5 h-5" />}
          trend={{
            value: 5.4,
            isPositive: true,
          }}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SMS Volume Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">
            SMS Volume (Last 7 Days)
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={smsData}
                margin={{
                  top: 10,
                  right: 10,
                  left: -20,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e2e8f0"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: '#64748b',
                    fontSize: 12,
                  }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: '#64748b',
                    fontSize: 12,
                  }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  }}
                  formatter={(value) => [
  Number(value ?? 0).toLocaleString(),
  'SMS Sent',
]}
                />
                <Area
                  type="monotone"
                  dataKey="volume"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorVolume)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">
            Revenue (Last 7 Days)
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={revenueData}
                margin={{
                  top: 10,
                  right: 10,
                  left: -10,
                  bottom: 0,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e2e8f0"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: '#64748b',
                    fontSize: 12,
                  }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: '#64748b',
                    fontSize: 12,
                  }}
                  tickFormatter={(val) => `₦${val / 1000}k`}
                />
                <Tooltip
                  cursor={{
                    fill: '#f1f5f9',
                  }}
                  contentStyle={{
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  }}
                  formatter={(value) => [
  `₦${Number(value ?? 0).toLocaleString()}`,
  'Revenue',
]}
                />
                <Bar
                  dataKey="revenue"
                  fill="#10b981"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">
            Recent Activity
          </h3>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
            View all <ArrowUpRightIcon className="w-4 h-4" />
          </button>
        </div>
        <div className="divide-y divide-slate-100">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="px-6 py-4 flex items-center gap-4 hover:bg-slate-50 transition-colors"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${activity.type === 'payment' ? 'bg-emerald-100 text-emerald-600' : activity.type === 'sms' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'}`}
              >
                {activity.type === 'payment' ? (
                  <DollarSignIcon className="w-5 h-5" />
                ) : activity.type === 'sms' ? (
                  <LucideMessageSquareIcon className="w-5 h-5" />
                ) : (
                  <LucideUsersIcon className="w-5 h-5" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 truncate">
                  {activity.user}
                </p>
                <p className="text-sm text-slate-500 truncate">
                  {activity.desc}
                </p>
              </div>
              <div className="text-sm text-slate-400 whitespace-nowrap">
                {activity.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
