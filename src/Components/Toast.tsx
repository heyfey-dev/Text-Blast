"use client";
import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, Info, X } from 'lucide-react'
export type ToastType = 'success' | 'error' | 'info'
export interface ToastProps {
  id: string
  type: ToastType
  message: string
  onDismiss: (id: string) => void
}
export function Toast({ id, type, message, onDismiss }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(id)
    }, 4000)
    return () => clearTimeout(timer)
  }, [id, onDismiss])
  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
    error: <XCircle className="w-5 h-5 text-red-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />,
  }
  const bgColors = {
    success: 'bg-white border-emerald-100',
    error: 'bg-white border-red-100',
    info: 'bg-white border-blue-100',
  }
  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.3,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
        transition: {
          duration: 0.2,
        },
      }}
      className={`flex items-center gap-3 p-4 rounded-xl shadow-lg border ${bgColors[type]} min-w-[300px] max-w-md pointer-events-auto`}
    >
      <div className="flex-shrink-0">{icons[type]}</div>
      <p className="flex-1 text-sm font-medium text-gray-700">{message}</p>
      <button
        onClick={() => onDismiss(id)}
        className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
      >
        <X size={16} />
      </button>
    </motion.div>
  )
}
