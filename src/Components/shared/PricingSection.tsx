"use client";
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
const tiers = [
  {
    name: 'Starter',
    priceMonthly: 29,
    priceAnnual: 24,
    features: [
      '1,000 messages/mo',
      '1 user',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Growth',
    priceMonthly: 79,
    priceAnnual: 66,
    features: [
      '10,000 messages/mo',
      '5 users',
      'Advanced analytics',
      'Templates library',
      'Priority support',
    ],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Business',
    priceMonthly: 199,
    priceAnnual: 166,
    features: [
      '50,000 messages/mo',
      'Unlimited users',
      'API access',
      'Dedicated account manager',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]
export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true)
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#1A1A2E] mb-4">
            Plans That Grow With You
          </h2>
          <p className="text-xl text-[#4A4A5A] mb-8">
            Transparent pricing. No hidden fees. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span
              className={`text-sm font-bold ${!isAnnual ? 'text-[#1A1A2E]' : 'text-[#4A4A5A]'}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-[#FAFAF7] border border-gray-200 rounded-full p-1 transition-colors duration-300 focus:outline-none"
            >
              <motion.div
                className="w-6 h-6 bg-[#FF6B4A] rounded-full shadow-md"
                animate={{
                  x: isAnnual ? 32 : 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30,
                }}
              />
            </button>
            <span
              className={`text-sm font-bold ${isAnnual ? 'text-[#1A1A2E]' : 'text-[#4A4A5A]'}`}
            >
              Annual{' '}
              <span className="ml-1 text-[#FF6B4A] text-xs bg-[#FFF0EC] px-2 py-0.5 rounded-full">
                2 months free
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
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
              transition={{
                delay: index * 0.1,
              }}
              className={`relative p-8 rounded-3xl border transition-all duration-300 ${tier.highlighted ? 'bg-white border-[#FF6B4A] shadow-[0_10px_40px_rgba(255,107,74,0.15)] scale-105 z-10' : 'bg-[#FAFAF7] border-transparent hover:border-gray-200'}`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B4A] text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">
                {tier.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-[#1A1A2E]">
                  ${isAnnual ? tier.priceAnnual : tier.priceMonthly}
                </span>
                <span className="text-[#4A4A5A]">/mo</span>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#FFF0EC] flex items-center justify-center flex-shrink-0">
                      <Check
                        size={12}
                        className="text-[#FF6B4A] stroke-[3px]"
                      />
                    </div>
                    <span className="text-[#4A4A5A] text-sm font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-bold transition-all ${tier.highlighted ? 'bg-[#FF6B4A] text-white hover:bg-[#E85A3A] shadow-lg shadow-[#FF6B4A]/20' : 'bg-white text-[#1A1A2E] border border-gray-200 hover:border-[#FF6B4A] hover:text-[#FF6B4A]'}`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
