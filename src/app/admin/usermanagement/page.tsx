"use client"
import React, { useState } from 'react'
import { DataTable, Column } from '@/Components/admin/DataTable'
import { StatusBadge } from '@/Components/admin/StatusBar'
import { Modal } from '@/Components/admin/modal'
import { ConfirmDialog } from '@/Components/admin/ConfirmDialogue'
import { Settings2Icon, PlusIcon, MinusIcon, BanIcon } from 'lucide-react'
import { toast } from 'sonner'
interface User {
  id: string
  name: string
  email: string
  balance: number
  status: 'Active' | 'Blocked'
}
const mockUsers: User[] = [
  {
    id: 'USR-001',
    name: 'Chidi Okeke',
    email: 'chidi.o@example.com',
    balance: 45000,
    status: 'Active',
  },
  {
    id: 'USR-002',
    name: 'Ngozi Adebayo',
    email: 'ngozi.a@techcorp.ng',
    balance: 12500,
    status: 'Active',
  },
  {
    id: 'USR-003',
    name: 'Oluwaseun Ventures',
    email: 'hello@oluwaseun.com',
    balance: 0,
    status: 'Blocked',
  },
  {
    id: 'USR-004',
    name: 'Amina Bello',
    email: 'amina.b@gmail.com',
    balance: 85000,
    status: 'Active',
  },
  {
    id: 'USR-005',
    name: 'Emeka Johnson',
    email: 'emeka.j@startup.ng',
    balance: 3200,
    status: 'Active',
  },
  {
    id: 'USR-006',
    name: 'Fatima Umar',
    email: 'f.umar@example.com',
    balance: 150000,
    status: 'Active',
  },
  {
    id: 'USR-007',
    name: 'Tunde Bakare',
    email: 'tunde.b@agency.com',
    balance: 500,
    status: 'Blocked',
  },
  {
    id: 'USR-008',
    name: 'Zainab Ibrahim',
    email: 'zainab.i@logistics.ng',
    balance: 27500,
    status: 'Active',
  },
  {
    id: 'USR-009',
    name: 'Kelechi Nwosu',
    email: 'k.nwosu@retail.com',
    balance: 98000,
    status: 'Active',
  },
  {
    id: 'USR-010',
    name: 'Bisi Ogunleye',
    email: 'bisi.o@school.edu.ng',
    balance: 1200,
    status: 'Active',
  },
  {
    id: 'USR-011',
    name: 'Yusuf Danjuma',
    email: 'yusuf.d@farm.ng',
    balance: 4500,
    status: 'Active',
  },
  {
    id: 'USR-012',
    name: 'Grace Effiong',
    email: 'grace.e@boutique.com',
    balance: 0,
    status: 'Blocked',
  },
]
export  default function UserManagement() {
  const [users, setUsers] = useState<User[]>(mockUsers)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isManageModalOpen, setIsManageModalOpen] = useState(false)
  const [isSuspendDialogOpen, setIsSuspendDialogOpen] = useState(false)
  const [creditAmount, setCreditAmount] = useState('')
  const [debitAmount, setDebitAmount] = useState('')
  const handleManageClick = (user: User) => {
    setSelectedUser(user)
    setCreditAmount('')
    setDebitAmount('')
    setIsManageModalOpen(true)
  }
  const handleCredit = () => {
    if (!selectedUser || !creditAmount) return
    const amount = parseFloat(creditAmount)
    if (isNaN(amount) || amount <= 0) {
      toast.error('Please enter a valid amount')
      return
    }
    setUsers(
      users.map((u) =>
        u.id === selectedUser.id
          ? {
              ...u,
              balance: u.balance + amount,
            }
          : u,
      ),
    )
    toast.success(
      `Successfully credited ₦${amount.toLocaleString()} to ${selectedUser.name}`,
    )
    setCreditAmount('')
    setIsManageModalOpen(false)
  }
  const handleDebit = () => {
    if (!selectedUser || !debitAmount) return
    const amount = parseFloat(debitAmount)
    if (isNaN(amount) || amount <= 0) {
      toast.error('Please enter a valid amount')
      return
    }
    if (amount > selectedUser.balance) {
      toast.error('Insufficient balance for debit')
      return
    }
    setUsers(
      users.map((u) =>
        u.id === selectedUser.id
          ? {
              ...u,
              balance: u.balance - amount,
            }
          : u,
      ),
    )
    toast.success(
      `Successfully debited ₦${amount.toLocaleString()} from ${selectedUser.name}`,
    )
    setDebitAmount('')
    setIsManageModalOpen(false)
  }
  const handleSuspend = () => {
    if (!selectedUser) return
    const newStatus = selectedUser.status === 'Active' ? 'Blocked' : 'Active'
    setUsers(
      users.map((u) =>
        u.id === selectedUser.id
          ? {
              ...u,
              status: newStatus,
            }
          : u,
      ),
    )
    toast.success(
      `User account ${newStatus === 'Blocked' ? 'suspended' : 'reactivated'} successfully`,
    )
    setIsManageModalOpen(false)
  }
  const columns: Column<User>[] = [
    {
      header: 'User ID',
      accessorKey: 'id',
      className: 'font-medium text-slate-900',
    },
    {
      header: 'User',
      cell: (user) => (
        <div>
          <div className="font-medium text-slate-900">{user.name}</div>
          <div className="text-slate-500 text-xs">{user.email}</div>
        </div>
      ),
    },
    {
      header: 'Wallet Balance',
      cell: (user) => (
        <span className="font-medium">₦{user.balance.toLocaleString()}</span>
      ),
    },
    {
      header: 'Status',
      cell: (user) => (
        <StatusBadge
          status={user.status}
          variant={user.status === 'Active' ? 'success' : 'danger'}
        />
      ),
    },
    {
      header: 'Actions',
      cell: (user) => (
        <button
          onClick={() => handleManageClick(user)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
        >
          <Settings2Icon className="w-4 h-4" />
          Manage
        </button>
      ),
    },
  ]
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">User Management</h1>
        <p className="text-slate-500 mt-1">
          Manage user accounts, wallet balances, and access.
        </p>
      </div>

      <DataTable
        data={users}
        columns={columns}
        searchPlaceholder="Search by name, email or ID..."
        searchKey={(user) => `${user.name} ${user.email} ${user.id}`}
        rowClassName={(user) =>
          user.status === 'Blocked' ? 'bg-red-50/30' : ''
        }
      />

      {/* Manage User Modal */}
      <Modal
        isOpen={isManageModalOpen}
        onClose={() => setIsManageModalOpen(false)}
        title={`Manage User: ${selectedUser?.name}`}
      >
        {selectedUser && (
          <div className="space-y-6">
            {/* User Info Summary */}
            <div className="bg-slate-50 p-4 rounded-lg flex justify-between items-center border border-slate-100">
              <div>
                <p className="text-sm text-slate-500">Current Balance</p>
                <p className="text-2xl font-bold text-slate-900">
                  ₦{selectedUser.balance.toLocaleString()}
                </p>
              </div>
              <StatusBadge
                status={selectedUser.status}
                variant={
                  selectedUser.status === 'Active' ? 'success' : 'danger'
                }
              />
            </div>

            {/* Manual Credit */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-slate-900 flex items-center gap-2">
                <PlusIcon className="w-4 h-4 text-emerald-500" />
                Manual Credit
              </h4>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                    ₦
                  </span>
                  <input
                    type="number"
                    value={creditAmount}
                    onChange={(e) => setCreditAmount(e.target.value)}
                    placeholder="Amount to add"
                    className="w-full pl-8 pr-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button
                  onClick={handleCredit}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  Credit Wallet
                </button>
              </div>
            </div>

            {/* Manual Debit */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h4 className="text-sm font-medium text-slate-900 flex items-center gap-2">
                <MinusIcon className="w-4 h-4 text-amber-500" />
                Manual Debit
              </h4>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                    ₦
                  </span>
                  <input
                    type="number"
                    value={debitAmount}
                    onChange={(e) => setDebitAmount(e.target.value)}
                    placeholder="Amount to deduct"
                    className="w-full pl-8 pr-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button
                  onClick={handleDebit}
                  className="px-4 py-2 bg-amber-500 text-white text-sm font-medium rounded-lg hover:bg-amber-600 transition-colors whitespace-nowrap"
                >
                  Debit Wallet
                </button>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h4 className="text-sm font-medium text-red-600 flex items-center gap-2">
                <BanIcon className="w-4 h-4" />
                Danger Zone
              </h4>
              <button
                onClick={() => setIsSuspendDialogOpen(true)}
                className="w-full px-4 py-2 bg-red-50 text-red-600 border border-red-200 text-sm font-medium rounded-lg hover:bg-red-100 transition-colors"
              >
                {selectedUser.status === 'Active'
                  ? 'Suspend Account'
                  : 'Reactivate Account'}
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Suspend Confirmation Dialog */}
      <ConfirmDialog
        isOpen={isSuspendDialogOpen}
        onClose={() => setIsSuspendDialogOpen(false)}
        onConfirm={handleSuspend}
        title={
          selectedUser?.status === 'Active'
            ? 'Suspend Account?'
            : 'Reactivate Account?'
        }
        message={`Are you sure you want to ${selectedUser?.status === 'Active' ? 'suspend' : 'reactivate'} ${selectedUser?.name}'s account? ${selectedUser?.status === 'Active' ? 'They will not be able to send SMS or access their dashboard.' : ''}`}
        confirmText={
          selectedUser?.status === 'Active' ? 'Yes, Suspend' : 'Yes, Reactivate'
        }
        isDestructive={selectedUser?.status === 'Active'}
      />
    </div>
  )
}
