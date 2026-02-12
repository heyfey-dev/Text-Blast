"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/Components/DashboardLayout';
import { ChangePasswordModal } from '@/Components/ChangePasswordModal';

import { User, Mail, MessageSquare, Save, Lock } from 'lucide-react';
import { LoadingSpinner } from '@/Components/LoadingSpinner';

export default function ProfilePage() {
  // Outer wrapper ensures page is a client component
  return <ProfilePageContent />;
}

function ProfilePageContent() {
  const [senderId, setSenderId] = useState('TextBlast');
  const [isSaving, setIsSaving] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);


  const handleSaveProfile = async () => {
    setIsSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSaving(false);
   console.log("Profile updated!");
  };

  const handleChangePassword = async (oldPass: string, newPass: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
   console.log("Password updated!");
    setIsPasswordModalOpen(false);
  };

  return (
    <DashboardLayout currentPage="profile" pageTitle="My Profile">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-gray-100 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-[#1A1A2E] text-white flex items-center justify-center text-3xl font-bold shadow-xl ring-4 ring-white">
              JD
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-[#1A1A2E]">John Doe</h2>
              <p className="text-gray-500">Member since Oct 2023</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-bold text-[#1A1A2E] mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value="John Doe"
                  readOnly
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-[#1A1A2E] mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value="john@example.com"
                  readOnly
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed"
                />
              </div>
            </div>

            {/* Sender ID */}
            <div>
              <label className="block text-sm font-bold text-[#1A1A2E] mb-2">Default Sender ID</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={senderId}
                  onChange={(e) => setSenderId(e.target.value)}
                  maxLength={11}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B4A] focus:ring-2 focus:ring-[#FF6B4A]/20 outline-none transition-all"
                />
              </div>
              <p className="mt-2 text-xs text-gray-400">
                This will be pre-filled when you send messages.
              </p>
            </div>

            {/* Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleSaveProfile}
                disabled={isSaving}
                className="flex-1 bg-[#FF6B4A] text-white font-bold py-3 rounded-xl shadow-lg shadow-[#FF6B4A]/20 hover:bg-[#E85A3A] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSaving ? (
                  <>
                    <LoadingSpinner size="sm" className="text-white" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={18} />
                    Save Changes
                  </>
                )}
              </button>

              <button
                onClick={() => setIsPasswordModalOpen(true)}
                className="flex-1 bg-white text-[#1A1A2E] font-bold py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                <Lock size={18} />
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>

      <ChangePasswordModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
        onSave={handleChangePassword}
      />
    </DashboardLayout>
  );
}
