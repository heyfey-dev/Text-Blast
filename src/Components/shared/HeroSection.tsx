"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
const leftBubbles = [
  {
    text: '🎉 Flash sale! 50% off today only',
    color: 'bg-white',
    y: 20,
    x: -20,
    delay: 0.2,
  },
  {
    text: 'Your appointment is tomorrow at 2pm',
    color: 'bg-[#FFF0EC]',
    y: 180,
    x: 40,
    delay: 0.4,
  },
  {
    text: 'Thanks for your order! Track here: bit.ly/...',
    color: 'bg-white',
    y: 340,
    x: -10,
    delay: 0.6,
  },
]
const rightBubbles = [
  {
    text: 'Hey! We miss you. Come back for 20% off',
    color: 'bg-[#FFF0EC]',
    y: 60,
    x: 20,
    delay: 0.3,
  },
  {
    text: 'Your table is ready! 🍽️',
    color: 'bg-white',
    y: 220,
    x: -30,
    delay: 0.5,
  },
  {
    text: 'Reminder: Payment due in 3 days',
    color: 'bg-[#FFF0EC]',
    y: 380,
    x: 30,
    delay: 0.7,
  },
]
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#FF6B4A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF6B4A]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Chat Bubbles (Desktop) */}
        <div className="hidden lg:block col-span-3 h-[500px] relative">
          {leftBubbles.map((bubble, i) => (
            <motion.div
              key={i}
              initial={{
                x: -100,
                opacity: 0,
                rotate: -5,
              }}
              animate={{
                x: bubble.x,
                opacity: 1,
                rotate: 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 12,
                delay: bubble.delay,
              }}
              className={`absolute left-0 p-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] max-w-[240px] text-sm font-medium text-[#4A4A5A] ${bubble.color}`}
              style={{
                top: bubble.y,
              }}
            >
              {bubble.text}
            </motion.div>
          ))}
        </div>

        {/* Center Content */}
        <div className="col-span-1 lg:col-span-6 text-center flex flex-col items-center">
          <motion.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFF0EC] text-[#FF6B4A] font-bold text-sm mb-6 border border-[#FF6B4A]/20">
              🚀 The #1 SMS Marketing Tool
            </span>
          </motion.div>

          <motion.h1
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1A1A2E] leading-[1.1] mb-6 tracking-tight"
          >
            Your Customers Are{' '}
            <span className="text-[#FF6B4A]">One Text Away</span>
          </motion.h1>

          <motion.p
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="text-xl text-[#4A4A5A] mb-10 max-w-2xl leading-relaxed"
          >
            Send personalized texts to thousands in seconds. Promotions,
            reminders, confirmations — all from one simple dashboard.
          </motion.p>

          <motion.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="bg-[#FF6B4A] text-white text-lg font-bold px-8 py-4 rounded-full shadow-[0_10px_30px_rgba(255,107,74,0.3)] hover:bg-[#E85A3A] transition-colors flex items-center gap-2 group"
            >
              Start Sending for Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
            className="mt-6 flex items-center gap-6 text-sm font-semibold text-[#4A4A5A]/80"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF6B4A]" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF6B4A]" />
              100 free messages
            </span>
          </motion.div>
        </div>

        {/* Right Chat Bubbles (Desktop) */}
        <div className="hidden lg:block col-span-3 h-[500px] relative">
          {rightBubbles.map((bubble, i) => (
            <motion.div
              key={i}
              initial={{
                x: 100,
                opacity: 0,
                rotate: 5,
              }}
              animate={{
                x: bubble.x,
                opacity: 1,
                rotate: 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 12,
                delay: bubble.delay,
              }}
              className={`absolute right-0 p-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] max-w-[240px] text-sm font-medium text-[#4A4A5A] ${bubble.color}`}
              style={{
                top: bubble.y,
              }}
            >
              {bubble.text}
            </motion.div>
          ))}
        </div>

        {/* Mobile Chat Bubbles (Simplified) */}
        <div className="lg:hidden col-span-1 flex flex-col gap-4 items-center w-full mt-8 opacity-80">
          <div className="bg-white p-4 rounded-2xl shadow-sm max-w-xs rotate-[-2deg]">
            🎉 Flash sale! 50% off today only
          </div>
          <div className="bg-[#FFF0EC] p-4 rounded-2xl shadow-sm max-w-xs rotate-[2deg] self-end mr-8">
            Hey! We miss you. Come back for 20% off
          </div>
        </div>
      </div>
    </section>
  )
}
