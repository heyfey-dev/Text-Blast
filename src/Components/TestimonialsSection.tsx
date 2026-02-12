"use client";
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
const testimonials = [
  {
    id: 1,
    quote:
      "We increased repeat visits by 40% just by sending weekly specials via text. It's the most effective marketing channel we have.",
    author: 'Maria Garcia',
    role: "Owner, Bella's Bakery",
    initials: 'MG',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    id: 2,
    quote:
      'Setup took 5 minutes. Our patients love the appointment reminders, and our no-show rate has dropped to almost zero.',
    author: 'Dr. James Kim',
    role: 'Smile Dental',
    initials: 'JK',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 3,
    quote:
      'The ROI is insane. Every dollar we spend on texts brings back twenty. I wish we started using TextBlast years ago.',
    author: 'Alex Turner',
    role: 'Manager, FitZone Gym',
    initials: 'AT',
    color: 'bg-green-100 text-green-600',
  },
  {
    id: 4,
    quote:
      "Finally, a texting platform that doesn't feel like it was built for engineers. It's so intuitive and actually fun to use.",
    author: 'Sarah Lewis',
    role: 'Bloom Flowers',
    initials: 'SL',
    color: 'bg-purple-100 text-purple-600',
  },
]
export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [currentIndex])
  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }
  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    )
  }
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
  }
  return (
    <section id="testimonials" className="py-24 bg-[#FAFAF7] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-[#1A1A2E] mb-16">
          Loved by 10,000+ Small Businesses
        </h2>

        <div className="relative h-[300px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                },
                opacity: {
                  duration: 0.2,
                },
              }}
              className="absolute w-full max-w-2xl bg-white p-8 md:p-12 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
            >
              <Quote className="w-10 h-10 text-[#FF6B4A]/20 mx-auto mb-6" />
              <p className="text-xl md:text-2xl font-medium text-[#1A1A2E] mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>

              <div className="flex items-center justify-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${testimonials[currentIndex].color}`}
                >
                  {testimonials[currentIndex].initials}
                </div>
                <div className="text-left">
                  <div className="font-bold text-[#1A1A2E]">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-sm text-[#4A4A5A]">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white text-[#1A1A2E] shadow-sm hover:bg-[#FFF0EC] hover:text-[#FF6B4A] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1)
                  setCurrentIndex(idx)
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-[#FF6B4A] w-6' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white text-[#1A1A2E] shadow-sm hover:bg-[#FFF0EC] hover:text-[#FF6B4A] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
