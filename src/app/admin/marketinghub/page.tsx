"use client"
import React, { useState } from 'react'
import {
  SendIcon,
  UsersIcon,
  MailIcon,
  MessageSquareIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  LinkIcon,
} from 'lucide-react'
import { toast } from 'sonner'
export default function MarketingHub() {
  const [smsAudience, setSmsAudience] = useState('all')
  const [smsMessage, setSmsMessage] = useState('')
  const [isSmsSending, setIsSmsSending] = useState(false)
  const [emailSubject, setEmailSubject] = useState('')
  const [emailBody, setEmailBody] = useState('')
  const [isEmailSending, setIsEmailSending] = useState(false)
  const smsCharCount = smsMessage.length
  const smsSegments = Math.ceil(smsCharCount / 160) || 1
  const handleSendSms = async () => {
    if (!smsMessage.trim()) {
      toast.error('Message cannot be empty')
      return
    }
    setIsSmsSending(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    toast.success(
      `Broadcast sent to ${smsAudience === 'all' ? 'all users' : 'active users'} successfully!`,
    )
    setSmsMessage('')
    setIsSmsSending(false)
  }
  const handleSendEmail = async () => {
    if (!emailSubject.trim() || !emailBody.trim()) {
      toast.error('Subject and body are required')
      return
    }
    setIsEmailSending(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    toast.success('Email broadcast queued successfully!')
    setEmailSubject('')
    setEmailBody('')
    setIsEmailSending(false)
  }
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Marketing Hub</h1>
        <p className="text-slate-500 mt-1">
          Send bulk communications to your platform users.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SMS Broadcaster */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
            <MessageSquareIcon className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-slate-900">
              SMS Broadcaster
            </h2>
          </div>

          <div className="p-6 space-y-5 flex-1">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <UsersIcon className="w-4 h-4 text-slate-400" />
                Target Audience
              </label>
              <select
                value={smsAudience}
                onChange={(e) => setSmsAudience(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Users (3,241)</option>
                <option value="active">Active Users Only (2,890)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700">
                Message Content
              </label>
              <textarea
                value={smsMessage}
                onChange={(e) => setSmsMessage(e.target.value)}
                rows={6}
                placeholder="Type your broadcast message here..."
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
              <div className="flex justify-between text-xs text-slate-500">
                <span>{smsCharCount} characters</span>
                <span>
                  {smsSegments} segment{smsSegments > 1 ? 's' : ''} (160
                  chars/segment)
                </span>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 border-t border-slate-200 bg-slate-50">
            <button
              onClick={handleSendSms}
              disabled={isSmsSending}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSmsSending ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <SendIcon className="w-4 h-4" />
                  Send SMS Broadcast
                </>
              )}
            </button>
          </div>
        </div>

        {/* Email Broadcaster */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
            <MailIcon className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg font-semibold text-slate-900">
              Email Broadcaster
            </h2>
          </div>

          <div className="p-6 space-y-5 flex-1">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700">
                Subject Line
              </label>
              <input
                type="text"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                placeholder="e.g., Important Platform Update"
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700">
                Email Body
              </label>
              <div className="border border-slate-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500">
                {/* Fake formatting toolbar */}
                <div className="flex items-center gap-1 p-2 border-b border-slate-200 bg-slate-50">
                  <button className="p-1.5 text-slate-500 hover:bg-slate-200 rounded transition-colors">
                    <BoldIcon className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-slate-500 hover:bg-slate-200 rounded transition-colors">
                    <ItalicIcon className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-slate-500 hover:bg-slate-200 rounded transition-colors">
                    <UnderlineIcon className="w-4 h-4" />
                  </button>
                  <div className="w-px h-4 bg-slate-300 mx-1"></div>
                  <button className="p-1.5 text-slate-500 hover:bg-slate-200 rounded transition-colors">
                    <LinkIcon className="w-4 h-4" />
                  </button>
                </div>
                <textarea
                  value={emailBody}
                  onChange={(e) => setEmailBody(e.target.value)}
                  rows={8}
                  placeholder="Write your email content here. HTML is supported."
                  className="w-full px-3 py-2 bg-white border-0 text-sm focus:ring-0 resize-none"
                />
              </div>
            </div>
          </div>

          <div className="px-6 py-4 border-t border-slate-200 bg-slate-50">
            <button
              onClick={handleSendEmail}
              disabled={isEmailSending}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isEmailSending ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <SendIcon className="w-4 h-4" />
                  Send Email Broadcast
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
