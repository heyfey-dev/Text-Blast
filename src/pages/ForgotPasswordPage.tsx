'use client';

import React, { useState } from 'react';
import { MessageCircle, ArrowRight, Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { LoadingSpinner } from '@/Components/LoadingSpinner';


export default function ForgotPasswordPage() {
  // Outer wrapper ensures the page itself is a client component
  return <ForgotPasswordContent />;
}

// Inner component that actually uses the toast hook
function ForgotPasswordContent() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');
 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
    console.log("Password reset link sent! Check your inbox.");
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center gap-2 mb-4 cursor-pointer"
            onClick={() => (window.location.hash = '')}
          >
            <div className="bg-[#FF6B4A] p-2 rounded-xl text-white">
              <MessageCircle size={24} fill="currentColor" />
            </div>
            <span className="text-2xl font-extrabold text-[#1A1A2E] tracking-tight">
              TextBlast
            </span>
          </div>
          <h1 className="text-2xl font-bold text-[#1A1A2E]">
            {isSubmitted ? 'Check your email' : 'Reset your password'}
          </h1>
          <p className="text-[#4A4A5A] mt-1">
            {isSubmitted
              ? 'We sent a password reset link to your email'
              : "Enter your email and we'll send you a reset link"}
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100">
          {isSubmitted ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 size={32} className="text-emerald-500" />
              </div>
              <p className="text-sm text-[#4A4A5A] mb-2">We sent a reset link to</p>
              <p className="font-bold text-[#1A1A2E] mb-6">{email}</p>
              <p className="text-xs text-gray-400 mb-6">
                Didn't receive the email? Check your spam folder or try again.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setEmail('');
                }}
                className="w-full py-3 rounded-xl font-bold text-[#FF6B4A] border border-[#FF6B4A]/30 hover:bg-[#FFF0EC] transition-colors"
              >
                Try another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-[#1A1A2E] mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B4A] focus:ring-2 focus:ring-[#FF6B4A]/20 outline-none transition-all"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#FF6B4A] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[#FF6B4A]/20 hover:bg-[#E85A3A] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <LoadingSpinner size="sm" className="text-white" />
                ) : (
                  <>
                    Send Reset Link <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>
          )}

          <div className="mt-8 text-center text-sm text-[#4A4A5A]">
            Remember your password?{' '}
            <a href="#login" className="text-[#FF6B4A] font-bold hover:underline">
              Back to login
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#"
            className="text-sm font-semibold text-gray-400 hover:text-[#1A1A2E] transition-colors inline-flex items-center gap-1"
          >
            <ArrowLeft size={14} />
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
