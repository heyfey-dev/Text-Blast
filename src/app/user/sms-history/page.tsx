"use client";


import React, { useState } from "react";
import DashboardLayout from "@/Components/user/DashboardLayout";
import { RefreshCw, Search, Filter } from "lucide-react";
import { LoadingSpinner } from "@/Components/shared/LoadingSpinner";

export default function SmsHistoryPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const historyData = [
    {
      id: 1,
      message: "Your order #12345 has been confirmed and is being processed.",
      recipients: 1,
      credits: 1,
      status: "Delivered",
      date: "Oct 24, 2023 • 10:30 AM",
    },
    {
      id: 2,
      message: "Don't miss out on our flash sale! Get 50% off all items today.",
      recipients: 1500,
      credits: 1500,
      status: "Delivered",
      date: "Oct 23, 2023 • 09:15 AM",
    },
    {
      id: 3,
      message: "Your appointment reminder for tomorrow at 2pm with Dr. Smith.",
      recipients: 1,
      credits: 1,
      status: "Failed",
      date: "Oct 22, 2023 • 04:45 PM",
    },
    {
      id: 4,
      message: "Welcome to TextBlast! Verify your account with code: 4589.",
      recipients: 1,
      credits: 1,
      status: "Delivered",
      date: "Oct 22, 2023 • 02:20 PM",
    },
    {
      id: 5,
      message: "Your subscription is about to expire. Renew now to keep access.",
      recipients: 45,
      credits: 45,
      status: "Pending",
      date: "Oct 21, 2023 • 11:00 AM",
    },
    {
      id: 6,
      message: "Happy Birthday! Here is a special gift just for you.",
      recipients: 1,
      credits: 1,
      status: "Delivered",
      date: "Oct 20, 2023 • 08:00 AM",
    },
    {
      id: 7,
      message: "System maintenance scheduled for tonight at 2am EST.",
      recipients: 2500,
      credits: 2500,
      status: "Processing",
      date: "Oct 19, 2023 • 05:30 PM",
    },
    {
      id: 8,
      message: "Thank you for your feedback! We appreciate your support.",
      recipients: 1,
      credits: 1,
      status: "Delivered",
      date: "Oct 18, 2023 • 01:15 PM",
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      Delivered: "bg-emerald-100 text-emerald-700",
      Failed: "bg-red-100 text-red-700",
      Pending: "bg-yellow-100 text-yellow-700",
      Processing: "bg-blue-100 text-blue-700",
    };
    return styles[status as keyof typeof styles] || "bg-gray-100 text-gray-700";
  };

  return (
    <DashboardLayout currentPage="sms-history" pageTitle="SMS History">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full sm:w-64">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-[#FF6B4A] focus:outline-none text-sm"
            />
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-gray-600 text-sm hover:bg-gray-50 font-medium">
              <Filter size={16} />
              Filter
            </button>
            <button
              onClick={handleRefresh}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-gray-600 text-sm hover:bg-gray-50 font-medium"
            >
              {isRefreshing ? <LoadingSpinner size="sm" /> : <RefreshCw size={16} />}
              Refresh
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Message
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Recipients
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Credits
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {historyData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                  <td
                    className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate"
                    title={item.message}
                  >
                    {item.message}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1A1A2E]">
                    {item.recipients.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.credits.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-bold ${getStatusBadge(item.status)}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
          <span>Showing 1-8 of 124 results</span>
          <div className="flex gap-2">
            <button
              className="px-3 py-1 rounded border border-gray-200 hover:bg-gray-50 disabled:opacity-50"
              disabled
            >
              Prev
            </button>
            <button className="px-3 py-1 rounded border border-gray-200 hover:bg-gray-50 text-[#1A1A2E] font-medium">
              Next
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
