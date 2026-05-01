"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { Upload, PenLine, Send } from 'lucide-react'
const steps = [
  {
    id: 1,
    title: 'Upload Contacts',
    description:
      'Import your list from CSV,  or add contacts manually in seconds.',
    icon: Upload,
  },
  {
    id: 2,
    title: 'Write Your Message',
    description:
      'Craft the perfect text with our easy editor and personalization tags.',
    icon: PenLine,
  },
  {
    id: 3,
    title: 'Hit Send',
    description:
      'Reach thousands instantly with one click. Watch the replies roll in.',
    icon: Send,
  },
]
export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
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
            Simple as 1-2-3
          </motion.h2>
          <motion.p
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
              margin: '-100px',
            }}
            transition={{
              delay: 0.1,
            }}
            className="text-xl text-[#4A4A5A] max-w-2xl mx-auto"
          >
            Get your first campaign running in less than 5 minutes.
          </motion.p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Dotted Line Connector (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-[#FF6B4A]/30 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: '-100px',
              }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: index * 0.2,
              }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-[#FFF0EC] rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-[#FF6B4A]" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FF6B4A] rounded-full flex items-center justify-center text-white font-bold shadow-md border-2 border-white">
                  {step.id}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#1A1A2E] mb-3">
                {step.title}
              </h3>
              <p className="text-[#4A4A5A] leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
