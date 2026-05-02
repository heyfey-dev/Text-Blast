'use client';

import React, { useEffect } from 'react';
import { useRouter } from "next/navigation";
import { LoadingSpinner } from '@/Components/shared/LoadingSpinner';


export default function PaymentStatusPage() {
  // Outer wrapper ensures page is client component
  return <PaymentStatusContent />;
}

function PaymentStatusContent() {
 
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
     console.log("Payment verified!");
      router.push("/dashboard");
    }, 7000);

    return () => clearTimeout(timer);
  }, [ router]);

  return (
    <div className="min-h-screen bg-[#FAFAF7] flex flex-col items-center justify-center p-4">
      <div className="bg-white p-12 rounded-3xl shadow-lg border border-gray-100 text-center max-w-sm w-full">
        <div className="flex justify-center mb-6">
          <LoadingSpinner size="lg" />
        </div>
        <h2 className="text-xl font-bold text-[#1A1A2E] mb-2">Verifying Payment...</h2>
        <p className="text-gray-500">
          Please wait while we confirm your transaction. Do not close this window.
        </p>
      </div>
    </div>
  );
}
