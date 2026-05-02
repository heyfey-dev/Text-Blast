"use client";


import React, { useState } from 'react';
import DashboardLayout from '@/Components/user/DashboardLayout';
import { useRouter } from "next/navigation";
import { BuyCreditsModal } from '@/Components/user/BuycrefitsMobile';
import { Check } from 'lucide-react';

export default function BuyCreditsPage() {
  const router = useRouter();
  const [selectedPackage, setSelectedPackage] = useState<{
    name: string;
    credits: number;
    price: string;
  } | null>(null);

  const packages = [
    {
      name: 'Starter',
      credits: 1000,
      price: '₦5,000',
      features: ['No expiration', 'Standard delivery speed', 'Email support'],
      color: 'bg-gray-50 border-gray-200',
      btnColor: 'bg-gray-900 text-white hover:bg-gray-800',
    },
    {
      name: 'Growth',
      credits: 5000,
      price: '₦20,000',
      features: ['No expiration', 'Priority delivery', 'Priority support', 'Best Value'],
      color: 'bg-[#FFF0EC] border-[#FF6B4A]',
      btnColor: 'bg-[#FF6B4A] text-white hover:bg-[#E85A3A]',
      highlight: true,
    },
    {
      name: 'Enterprise',
      credits: 20000,
      price: '₦70,000',
      features: ['No expiration', 'Highest priority', 'Dedicated manager', 'API Access'],
      color: 'bg-blue-50 border-blue-200',
      btnColor: 'bg-blue-600 text-white hover:bg-blue-700',
    },
  ];

  const handleBuy = (pkg: (typeof packages)[0]) => {
    setSelectedPackage({
      name: pkg.name,
      credits: pkg.credits,
      price: pkg.price,
    });
  };

  const handleConfirmPurchase = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    router.push("payment-status");
  };

  return (
    <DashboardLayout currentPage="buy-credits" pageTitle="Buy Credits">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-[#1A1A2E] mb-2">Top up your account</h2>
        <p className="text-gray-500">Choose a package that suits your needs. Credits never expire.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-3xl border-2 transition-all duration-300 ${pkg.color} ${pkg.highlight ? 'shadow-xl scale-105 z-10' : 'shadow-sm hover:shadow-md'}`}
          >
            {pkg.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B4A] text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                Most Popular
              </div>
            )}

            <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">{pkg.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-3xl font-extrabold text-[#1A1A2E]">{pkg.credits.toLocaleString()}</span>
              <span className="text-gray-500 font-medium">credits</span>
            </div>

            <div className="mb-8">
              <span className="text-2xl font-bold text-[#1A1A2E]">{pkg.price}</span>
            </div>

            <ul className="space-y-4 mb-8">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check size={12} className="text-[#1A1A2E] stroke-[3px]" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleBuy(pkg)}
              className={`w-full py-3 rounded-xl font-bold transition-all shadow-lg shadow-black/5 ${pkg.btnColor}`}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {selectedPackage && (
        <BuyCreditsModal
          isOpen={!!selectedPackage}
          onClose={() => setSelectedPackage(null)}
          onConfirm={handleConfirmPurchase}
          packageDetails={selectedPackage}
        />
      )}
    </DashboardLayout>
  );
}
