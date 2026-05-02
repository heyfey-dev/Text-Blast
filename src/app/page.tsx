"use client";
import React from 'react'

// Landing Page Components
import { Navbar } from '@/Components/shared/Navbar'
import { HeroSection } from '@/Components/shared/HeroSection'
import { HowItWorks } from '@/Components/shared/HowItWorks'
import { FeaturesSection } from '@/Components/shared/FeaturesSection'
import { PricingSection } from '@/Components/shared/PricingSection'
import { TestimonialsSection } from '@/Components/shared/TestimonialsSection'
import { Footer } from '@/Components/shared/Footer'

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
