// Components/Header.tsx
"use client";

import React from "react";
import { Bell, Menu } from "lucide-react";

interface HeaderProps {
  title: string;
  onToggleSidebar: () => void;
}

export function Header({ title, onToggleSidebar }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-30 h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="p-2 -ml-2 text-gray-500 hover:bg-gray-100 rounded-lg lg:hidden transition-colors"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold text-[#1A1A2E]">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-400 hover:text-[#FF6B4A] hover:bg-[#FFF0EC] rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF6B4A] rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
          <div className="hidden sm:block text-right">
            <div className="text-sm font-bold text-[#1A1A2E]">John Doe</div>
            <div className="text-xs text-gray-500">john@example.com</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#1A1A2E] text-white flex items-center justify-center font-bold text-sm shadow-md ring-2 ring-white">
            JD
          </div>
        </div>
      </div>
    </header>
  );
}
