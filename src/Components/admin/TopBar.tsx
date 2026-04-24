import React from 'react'
import { SearchIcon, BellIcon, MenuIcon } from 'lucide-react'
interface TopBarProps {
  toggleSidebar: () => void
}
export function TopBar({ toggleSidebar }: TopBarProps) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-10 flex items-center justify-between px-4 sm:px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <MenuIcon className="w-5 h-5" />
        </button>

        <div className="hidden sm:flex items-center relative max-w-md w-full">
          <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3" />
          <input
            type="text"
            placeholder="Quick search..."
            className="pl-9 pr-4 py-2 bg-slate-100 border-transparent rounded-lg text-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all w-64"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
          <BellIcon className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="h-8 w-px bg-slate-200 mx-1"></div>

        <button className="flex items-center gap-2 hover:bg-slate-50 p-1 pr-2 rounded-lg transition-colors">
          <img
            src="https://i.pravatar.cc/150?u=admin"
            alt="Admin Avatar"
            className="w-8 h-8 rounded-full border border-slate-200"
          />
        </button>
      </div>
    </header>
  )
}
