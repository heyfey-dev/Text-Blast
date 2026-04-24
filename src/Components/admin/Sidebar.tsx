'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  LayoutDashboardIcon,
  UsersIcon,
  ReceiptIcon,
  MessageSquareIcon,
  MegaphoneIcon,
  SettingsIcon,
  MessageCircleIcon,
} from 'lucide-react'

interface SidebarProps {
  isCollapsed: boolean
}

const menuItems = [
  { path: '/', label: 'Overview', icon: LayoutDashboardIcon },
  { path: '/admin/usermanagement', label: 'User Management', icon: UsersIcon },
  { path: '/admin/transactionhistory', label: 'Transaction History', icon: ReceiptIcon },
  { path: '/admin/smslog', label: 'SMS Logs', icon: MessageSquareIcon },
  { path: '/admin/marketinghub', label: 'Marketing Hub', icon: MegaphoneIcon },
  { path: '/admin/settings', label: 'Settings', icon: SettingsIcon },
]

export function Sidebar({ isCollapsed }: SidebarProps) {
  const pathname = usePathname()

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 256 }}
      className="bg-slate-900 text-slate-300 flex flex-col h-screen sticky top-0 z-20 border-r border-slate-800 shrink-0"
    >
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <div className="flex items-center gap-3 text-white">
          <div className="bg-blue-600 p-1.5 rounded-lg shrink-0">
            <MessageCircleIcon className="w-5 h-5 text-white" />
          </div>
          {!isCollapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="font-semibold text-lg whitespace-nowrap"
            >
              SMS Platform
            </motion.span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname === item.path

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-slate-800 hover:text-white'
              }`}
              title={isCollapsed ? item.label : undefined}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              {!isCollapsed && (
                <span className="font-medium text-sm whitespace-nowrap">
                  {item.label}
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800">
        <div
          className={`flex items-center gap-3 ${
            isCollapsed ? 'justify-center' : ''
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0 text-sm font-medium text-white">
            AD
          </div>
          {!isCollapsed && (
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-medium text-white truncate">
                Admin User
              </span>
              <span className="text-xs text-slate-500 truncate">
                admin@smsplatform.com
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.aside>
  )
}