"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MessageCircle, ArrowRight, Lock, Mail, User } from "lucide-react";
import { LoadingSpinner } from "@/Components/LoadingSpinner";


export default function RegisterPage() {
  // Outer wrapper ensures page is treated as client
  return <RegisterPageContent />;
}

function RegisterPageContent() {
  const [isLoading, setIsLoading] = useState(false);
 
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsLoading(true);

  const form = e.target as HTMLFormElement;
  const fullName = (form[0] as HTMLInputElement).value;
  const email = (form[1] as HTMLInputElement).value;
  const password = (form[2] as HTMLInputElement).value;
  const confirmPassword = (form[3] as HTMLInputElement).value;

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    setIsLoading(false);
    return;
  }

  try {
    const res = await fetch("http://localhost:4000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ fullName, email, password }),
      credentials: "include" // important for HTTP-only cookies
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Signup failed");
    }

    console.log("Account created:", data.user);

    router.push("/login"); // redirect to login page
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-[#FAFAF7] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center gap-2 mb-4 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <div className="bg-[#FF6B4A] p-2 rounded-xl text-white">
              <MessageCircle size={24} fill="currentColor" />
            </div>
            <span className="text-2xl font-extrabold text-[#1A1A2E] tracking-tight">
              TextBlast
            </span>
          </div>
          <h1 className="text-2xl font-bold text-[#1A1A2E]">Create your account</h1>
          <p className="text-[#4A4A5A]">Start sending smarter SMS campaigns today</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-[#1A1A2E] mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B4A] focus:ring-2 focus:ring-[#FF6B4A]/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#1A1A2E] mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B4A] focus:ring-2 focus:ring-[#FF6B4A]/20 outline-none transition-all"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#1A1A2E] mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B4A] focus:ring-2 focus:ring-[#FF6B4A]/20 outline-none transition-all"
                  placeholder="Create a password"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#1A1A2E] mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B4A] focus:ring-2 focus:ring-[#FF6B4A]/20 outline-none transition-all"
                  placeholder="Confirm password"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#FF6B4A] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[#FF6B4A]/20 hover:bg-[#E85A3A] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? <LoadingSpinner size="sm" className="text-white" /> : <>Create Account <ArrowRight size={20} /></>}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-[#4A4A5A]">
            Already have an account?{" "}
            <Link href="/login" className="text-[#FF6B4A] font-bold hover:underline">
              Log in here
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm font-semibold text-gray-400 hover:text-[#1A1A2E] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
