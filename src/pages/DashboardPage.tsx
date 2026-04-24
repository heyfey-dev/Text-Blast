"use client";


import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/Components/DashboardLayout';
import { useRouter } from "next/navigation";
import { CreditCard, Send, AlertTriangle, ArrowUpRight } from 'lucide-react';

interface Stat {
  label: string;
  value: string | number;
  icon: React.ElementType;
  color: string;
}

export default function DashboardPage() {
  const router = useRouter();

   const [stats, setStats] = useState<Stat[]>([
    { label: 'Available Credits', value: 0, icon: CreditCard, color: 'bg-emerald-100 text-emerald-600' },
    { label: 'Total SMS Sent', value: 0, icon: Send, color: 'bg-blue-100 text-blue-600' },
    { label: 'Failed SMS', value: 0, icon: AlertTriangle, color: 'bg-red-100 text-red-600' },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
       const res = await fetch("http://localhost:4000/api/stats", {
          method: "GET",
          credentials: "include", // send HTTP-only cookie
        });
        if (!res.ok) throw new Error('Failed to fetch stats');
        const data = await res.json();

        // Map API response to your stats format
        setStats([
          { label: 'Available Credits', value: data.availableCredits, icon: CreditCard, color: 'bg-emerald-100 text-emerald-600' },
          { label: 'Total SMS Sent', value: data.totalSmsSent, icon: Send, color: 'bg-blue-100 text-blue-600' },
          { label: 'Failed SMS', value: data.failedSms, icon: AlertTriangle, color: 'bg-red-100 text-red-600' },
        ]);
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);



  const recentActivity = [
    {
      id: 1,
      recipient: '+234 801 234 5678',
      message: 'Your order #12345 has been confirmed and...',
      status: 'Delivered',
      date: 'Just now',
    },
    {
      id: 2,
      recipient: '+234 809 876 5432',
      message: "Don't miss out on our flash sale! Get 50%...",
      status: 'Delivered',
      date: '2 mins ago',
    },
    {
      id: 3,
      recipient: '+234 703 456 7890',
      message: 'Your appointment reminder for tomorrow at...',
      status: 'Failed',
      date: '1 hour ago',
    },
    {
      id: 4,
      recipient: '+234 812 345 6789',
      message: 'Welcome to TextBlast! Verify your account...',
      status: 'Delivered',
      date: '3 hours ago',
    },
    {
      id: 5,
      recipient: '+234 901 234 5678',
      message: 'Your subscription is about to expire. Renew...',
      status: 'Pending',
      date: '5 hours ago',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-emerald-100 text-emerald-700';
      case 'Failed':
        return 'bg-red-100 text-red-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <DashboardLayout currentPage="dashboard" pageTitle="Dashboard Overview">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {loading ? (
          <p>Loading stats...</p>
        ) : (
          stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
                <h3 className="text-2xl font-extrabold text-[#1A1A2E]">{stat.value}</h3>
              </div>
            </div>
          ))
        )}
      </div>
      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-[#1A1A2E]">Recent Activity</h3>
          <button
            onClick={() => router.push("sms-history")}
            className="text-sm font-bold text-[#FF6B4A] hover:text-[#E85A3A] flex items-center gap-1"
          >
            View All <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Recipient</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Message</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentActivity.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1A1A2E]">{item.recipient}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">{item.message}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
