"use client";
import React, { useState } from 'react'
import { Modal } from './ModalWrapper'
import { LoadingSpinner } from './LoadingSpinner'
import { CreditCard, ShieldCheck } from 'lucide-react'
interface BuyCreditsModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => Promise<void>
  packageDetails: {
    name: string
    credits: number
    price: string
  }
}
export function BuyCreditsModal({
  isOpen,
  onClose,
  onConfirm,
  packageDetails,
}: BuyCreditsModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const handleConfirm = async () => {
    setIsLoading(true)
    await onConfirm()
    setIsLoading(false)
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Complete Purchase">
      <div className="space-y-6">
        <div className="text-center py-4">
          <div className="w-16 h-16 bg-[#FFF0EC] rounded-full flex items-center justify-center mx-auto mb-4 text-[#FF6B4A]">
            <CreditCard size={32} />
          </div>
          <h4 className="text-xl font-bold text-[#1A1A2E] mb-1">
            {packageDetails.name} Package
          </h4>
          <p className="text-gray-500">You are about to purchase</p>
        </div>

        <div className="bg-[#FAFAF7] p-6 rounded-2xl border border-gray-200">
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
            <span className="text-gray-600">Credits Amount</span>
            <span className="font-bold text-lg text-[#1A1A2E]">
              {packageDetails.credits.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Total Price</span>
            <span className="font-extrabold text-2xl text-[#FF6B4A]">
              {packageDetails.price}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500 justify-center bg-gray-50 p-2 rounded-lg">
          <ShieldCheck size={14} className="text-green-500" />
          <span>Secure payment processed via Paystack</span>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="flex-1 py-3 px-4 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={isLoading}
            className="flex-1 py-3 px-4 rounded-xl font-bold text-white bg-[#FF6B4A] hover:bg-[#E85A3A] shadow-lg shadow-[#FF6B4A]/20 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <LoadingSpinner size="sm" className="text-white" />
                Processing...
              </>
            ) : (
              'Pay Now'
            )}
          </button>
        </div>
      </div>
    </Modal>
  )
}
