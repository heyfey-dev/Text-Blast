// Components/Sidebar.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Send,
  History,
  CreditCard,
  User,
  MessageCircle,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onCloseMobile: () => void;
}

export function Sidebar({ isOpen, onCloseMobile }: SidebarProps) {
  const router = useRouter();
  const pathnameFromHook = usePathname(); // safe inside hook
  const [pathname, setPathname] = useState<string>("");

  // Make sure pathname is set only on client
  useEffect(() => {
    if (pathnameFromHook) setPathname(pathnameFromHook);
  }, [pathnameFromHook]);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/user/dashboard" },
    { id: "send-sms", label: "Send SMS", icon: Send, path: "/user/send-sms" },
    { id: "sms-history", label: "SMS History", icon: History, path: "/user/sms-history" },
    { id: "buy-credits", label: "Buy Credits", icon: CreditCard, path: "/user/buy-credits" },
    { id: "profile", label: "Profile", icon: User, path: "/user/profile" },
  ];

  const handleNav = (path: string) => {
    router.push(path);
    onCloseMobile();
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onCloseMobile}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-64 bg-[#1A1A2E] text-white transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 flex items-center gap-3 border-b border-gray-800">
            <div className="bg-[#FF6B4A] p-2 rounded-xl text-white">
              <MessageCircle size={20} fill="currentColor" />
            </div>
            <span className="text-xl font-extrabold tracking-tight">TextBlast</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.path)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? "bg-[#FF6B4A] text-white shadow-lg shadow-[#FF6B4A]/20"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <item.icon
                    size={20}
                    className={
                      isActive
                        ? "text-white"
                        : "text-gray-400 group-hover:text-white transition-colors"
                    }
                  />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Footer Actions */}
          <div className="p-4 border-t border-gray-800">
            <button
              onClick={() => router.push("/")}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-all"
            >
              <LogOut size={20} />
              <span className="font-medium">Log Out</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
