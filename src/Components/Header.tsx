// Components/Header.tsx
"use client";

import React, { useEffect, useState } from "react";
import { Bell, Menu } from "lucide-react";

interface HeaderProps {
  title: string;
  onToggleSidebar: () => void;
}

interface User {
  name: string;
  email: string;
}

export function Header({ title, onToggleSidebar }: HeaderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/user/me", {
          method: "GET",
          credentials: "include", // send HTTP-only cookie
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Failed to fetch user");

        setUser({ name: data.name, email: data.email });
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  // Get initials from name
  const initials = user?.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

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
            <div className="text-sm font-bold text-[#1A1A2E]">
              {user ? user.name : "Loading..."}
            </div>
            <div className="text-xs text-gray-500">
              {user ? user.email : "Loading..."}
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#1A1A2E] text-white flex items-center justify-center font-bold text-sm shadow-md ring-2 ring-white">
            {initials || "JD"}
          </div>
        </div>
      </div>
    </header>
  );
}