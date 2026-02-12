"use client";
import React from 'react'

// Landing Page Components
import { Navbar } from '@/Components/Navbar'
import { HeroSection } from '@/Components/HeroSection'
import { HowItWorks } from '@/Components/HowItWorks'
import { FeaturesSection } from '@/Components/FeaturesSection'
import { PricingSection } from '@/Components/PricingSection'
import { TestimonialsSection } from '@/Components/TestimonialsSection'
import { Footer } from '@/Components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans text-[#4A4A5A] overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
