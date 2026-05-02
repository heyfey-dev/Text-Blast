"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAFAF7]/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-[#FF6B4A] p-2 rounded-xl text-white">
            <MessageCircle size={24} fill="currentColor" />
          </div>
          <span className="text-2xl font-extrabold text-[#1A1A2E] tracking-tight">
            TextBlast
          </span>
        </Link>

        {/* Desktop nav (anchor links are OK for same page sections) */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="nav-link">Features</a>
          <a href="#how-it-works" className="nav-link">How it Works</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#testimonials" className="nav-link">Stories</a>
        </div>

        {/* Auth */}
        <div className="flex items-center gap-4">
          <Link
            href="auth/login"
            className="hidden sm:block text-[#1A1A2E] font-bold hover:text-[#FF6B4A] transition-colors"
          >
            Log in
          </Link>

          <Link href="auth/register">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#FF6B4A] text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-[#FF6B4A]/20 hover:bg-[#E85A3A] transition-colors"
            >
              Start Free Trial
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
