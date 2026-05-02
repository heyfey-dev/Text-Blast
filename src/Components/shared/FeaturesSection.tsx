"use client";

import { motion } from 'framer-motion'
import {
  CalendarClock,
  Users,
  LayoutTemplate,
  BarChart3,
  MessageSquareText,
  ShieldCheck,
} from 'lucide-react'
const features = [
  {
    title: 'Smart Scheduling',
    description:
      'Schedule texts for the perfect moment to maximize engagement rates.',
    icon: CalendarClock,
  },
  {
    title: 'Contact Groups',
    description:
      'Organize audiences into targeted segments for higher relevance.',
    icon: Users,
  },
  {
    title: 'Templates',
    description: 'Save and reuse your best-performing messages to save time.',
    icon: LayoutTemplate,
  },
  {
    title: 'Analytics',
    description: 'Track delivery, opens, and click-through rates in real-time.',
    icon: BarChart3,
  },
  {
    title: 'Two-Way Chat',
    description:
      'Let customers reply and have real conversations directly in your inbox.',
    icon: MessageSquareText,
  },
  {
    title: 'Compliance Built-In',
    description:
      'Automatic opt-out handling and TCPA compliance features included.',
    icon: ShieldCheck,
  },
]
export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-4xl font-extrabold text-[#1A1A2E] mb-4"
          >
            Everything You Need to Text Like a Pro
          </motion.h2>
          <p className="text-xl text-[#4A4A5A] max-w-2xl mx-auto">
            Powerful features wrapped in a simple, friendly interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                margin: '-50px',
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.2,
                },
              }}
              className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_30px_rgba(255,107,74,0.1)] transition-all"
            >
              <div className="w-12 h-12 bg-[#FFF0EC] rounded-xl flex items-center justify-center mb-6 text-[#FF6B4A]">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#4A4A5A] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
