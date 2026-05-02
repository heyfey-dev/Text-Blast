"use client";
import React, { useState } from 'react'
import { Modal } from '@/Components/shared/ModalWrapper'
import { LoadingSpinner } from '@/Components/shared/LoadingSpinner'
import { Send, Users, CreditCard } from 'lucide-react'
interface ConfirmSendModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => Promise<void>
  data: {
    senderId: string
    message: string
    recipientCount: number
    creditsCost: number
  }
}
export function ConfirmSendModal({
  isOpen,
  onClose,
  onConfirm,
  data,
}: ConfirmSendModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const handleConfirm = async () => {
    setIsLoading(true)
    await onConfirm()
    setIsLoading(false)
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Confirm Campaign">
      <div className="space-y-6">
        <div className="bg-[#FAFAF7] p-4 rounded-xl space-y-3 border border-gray-100">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Sender ID
            </span>
            <span className="font-bold text-[#1A1A2E]">{data.senderId}</span>
          </div>

          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
              Message Preview
            </span>
            <p className="text-sm text-gray-600 bg-white p-3 rounded-lg border border-gray-100 italic">
              "
              {data.message.length > 100
                ? data.message.substring(0, 100) + '...'
                : data.message}
              "
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 flex flex-col items-center text-center">
            <Users className="w-6 h-6 text-blue-500 mb-2" />
            <span className="text-2xl font-bold text-[#1A1A2E]">
              {data.recipientCount}
            </span>
            <span className="text-xs text-blue-600 font-medium">
              Recipients
            </span>
          </div>
          <div className="p-4 rounded-xl bg-[#FFF0EC] border border-[#FF6B4A]/20 flex flex-col items-center text-center">
            <CreditCard className="w-6 h-6 text-[#FF6B4A] mb-2" />
            <span className="text-2xl font-bold text-[#1A1A2E]">
              {data.creditsCost}
            </span>
            <span className="text-xs text-[#FF6B4A] font-medium">
              Credits Cost
            </span>
          </div>
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
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Now
              </>
            )}
          </button>
        </div>
      </div>
    </Modal>
  )
}
