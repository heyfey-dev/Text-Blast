"use client";

import React, { useState } from "react";
import DashboardLayout from "@/Components/user/DashboardLayout";
import { ConfirmSendModal } from "@/Components/user/ConfirmSendModal";
// import { useToast } from "@/Components/shared/ToastProvider";
import { Send, Info } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SendSmsPage() {
  // Outer wrapper ensures page is treated as client
  return <SendSmsPageContent />;
}

function SendSmsPageContent() {
  const router = useRouter();


  const [senderId, setSenderId] = useState("");
  const [message, setMessage] = useState("");
  const [recipients, setRecipients] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const recipientCount = recipients.split(",").filter((r) => r.trim().length > 0).length;
  const creditsCost = recipientCount * 1; // 1 credit per recipient

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderId || !message || recipientCount === 0) {
      console.log("Profile updated!");
      return;
    }
    setIsModalOpen(true);
  };

  const handleConfirmSend = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
   
    setIsModalOpen(false);
    setSenderId("");
    setMessage("");
    setRecipients("");
  };

  return (
    <DashboardLayout currentPage="send-sms" pageTitle="Send SMS Campaign">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-[#1A1A2E] mb-2">Sender ID</label>
                <input
                  type="text"
                  maxLength={11}
                  value={senderId}
                  onChange={(e) => setSenderId(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-200 focus:border-[#FF6B4A] focus:ring-2 focus:ring-[#FF6B4A]/20 outline-none transition-all"
                  placeholder="e.g. TextBlast (Max 11 chars)"
                />
                <p className="mt-1 text-xs text-gray-400">This is who the message appears from.</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1A1A2E] mb-2">Recipients</label>
                <textarea
                  rows={4}
                  value={recipients}
                  onChange={(e) => setRecipients(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-200 focus:border-[#FF6B4A] focus:ring-2 focus:ring-[#FF6B4A]/20 outline-none transition-all font-mono text-sm"
                  placeholder="Enter phone numbers separated by commas (e.g. +2348012345678, +2348098765432)"
                />
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="text-gray-500">Separate multiple numbers with commas</span>
                  <span className="font-bold text-[#FF6B4A] bg-[#FFF0EC] px-2 py-1 rounded-md">
                    {recipientCount} Recipients
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1A1A2E] mb-2">Message</label>
                <textarea
                  rows={6}
                  maxLength={160}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-200 focus:border-[#FF6B4A] focus:ring-2 focus:ring-[#FF6B4A]/20 outline-none transition-all"
                  placeholder="Type your message here..."
                />
                <div className="mt-2 flex justify-end">
                  <span className={`text-xs font-bold ${message.length > 150 ? "text-red-500" : "text-gray-400"}`}>
                    {message.length}/160 characters
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="text-sm">
                  <span className="text-gray-500">Total Cost:</span>
                  <span className="ml-2 font-bold text-lg text-[#1A1A2E]">{creditsCost} Credits</span>
                </div>
                <button
                  type="submit"
                  className="bg-[#FF6B4A] text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-[#FF6B4A]/20 hover:bg-[#E85A3A] transition-all flex items-center gap-2"
                >
                  <Send size={18} /> Send Campaign
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-[#1A1A2E] text-white p-6 rounded-2xl shadow-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Info size={20} className="text-[#FF6B4A]" />
              Quick Tips
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2"><span className="text-[#FF6B4A]">•</span> Keep messages concise and clear.</li>
              <li className="flex items-start gap-2"><span className="text-[#FF6B4A]">•</span> Include a clear call to action.</li>
              <li className="flex items-start gap-2"><span className="text-[#FF6B4A]">•</span> Avoid using special characters to ensure delivery.</li>
              <li className="flex items-start gap-2"><span className="text-[#FF6B4A]">•</span> Double check recipient numbers.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-[#1A1A2E] mb-2">Need more credits?</h3>
            <p className="text-sm text-gray-500 mb-4">You have 5,000 credits remaining.</p>
            <button
              onClick={() => router.push("buy-credits")}
              className="w-full py-2.5 rounded-lg border border-[#FF6B4A] text-[#FF6B4A] font-bold hover:bg-[#FFF0EC] transition-colors text-sm"
            >
              Buy Credits
            </button>
          </div>
        </div>
      </div>

      <ConfirmSendModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmSend}
        data={{
          senderId,
          message,
          recipientCount,
          creditsCost,
        }}
      />
    </DashboardLayout>
  );
}
