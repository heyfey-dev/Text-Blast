import React, { useState } from 'react'
import {
  SaveIcon,
  EyeIcon,
  EyeOffIcon,
  KeyIcon,
  ShieldAlertIcon,
} from 'lucide-react'
import { toast } from 'sonner'
export default function Settings() {
  const [isSaving, setIsSaving] = useState(false)
  const [showAtKey, setShowAtKey] = useState(false)
  const [showPaystackKey, setShowPaystackKey] = useState(false)
  const [formData, setFormData] = useState({
    globalRate: '4.00',
    atApiKey: 'atsk_live_8f9e2d1c4b5a6...',
    paystackApiKey: 'sk_live_1234567890abcdef...',
    blacklistWords: 'lottery, promo, bank, urgent, winner, prize, claim',
  })
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    toast.success('System settings saved successfully')
    setIsSaving(false)
  }
  return (
    <div className="p-6 max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">System Settings</h1>
        <p className="text-slate-500 mt-1">
          Configure global platform parameters and integrations.
        </p>
      </div>

      <div className="space-y-6">
        {/* Pricing Configuration */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
            <div className="w-5 h-5 text-slate-500" />
            <h2 className="text-lg font-semibold text-slate-900">
              Pricing Configuration
            </h2>
          </div>
          <div className="p-6">
            <div className="max-w-md space-y-1.5">
              <label className="text-sm font-medium text-slate-700">
                Global Price per SMS (₦)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                  ₦
                </span>
                <input
                  type="number"
                  name="globalRate"
                  step="0.01"
                  value={formData.globalRate}
                  onChange={handleChange}
                  className="w-full pl-8 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <p className="text-xs text-slate-500">
                This is the default rate charged to users per SMS segment.
              </p>
            </div>
          </div>
        </div>

        {/* API Integrations */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
            <KeyIcon className="w-5 h-5 text-slate-500" />
            <h2 className="text-lg font-semibold text-slate-900">
              API Integrations
            </h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="max-w-xl space-y-1.5">
              <label className="text-sm font-medium text-slate-700">
                Africa's Talking API Key
              </label>
              <div className="relative">
                <input
                  type={showAtKey ? 'text' : 'password'}
                  name="atApiKey"
                  value={formData.atApiKey}
                  onChange={handleChange}
                  className="w-full pl-3 pr-10 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowAtKey(!showAtKey)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showAtKey ? (
                    <EyeOffIcon className="w-4 h-4" />
                  ) : (
                    <EyeIcon className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="max-w-xl space-y-1.5">
              <label className="text-sm font-medium text-slate-700">
                Paystack Secret Key
              </label>
              <div className="relative">
                <input
                  type={showPaystackKey ? 'text' : 'password'}
                  name="paystackApiKey"
                  value={formData.paystackApiKey}
                  onChange={handleChange}
                  className="w-full pl-3 pr-10 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowPaystackKey(!showPaystackKey)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPaystackKey ? (
                    <EyeOffIcon className="w-4 h-4" />
                  ) : (
                    <EyeIcon className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
            <ShieldAlertIcon className="w-5 h-5 text-slate-500" />
            <h2 className="text-lg font-semibold text-slate-900">
              Security & Compliance
            </h2>
          </div>
          <div className="p-6">
            <div className="max-w-2xl space-y-1.5">
              <label className="text-sm font-medium text-slate-700">
                Blacklisted Words
              </label>
              <textarea
                name="blacklistWords"
                value={formData.blacklistWords}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
              <p className="text-xs text-slate-500">
                Comma-separated list of words. Messages containing these words
                will be automatically flagged and blocked.
              </p>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="flex justify-end pt-4">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSaving ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <SaveIcon className="w-4 h-4" />
            )}
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
