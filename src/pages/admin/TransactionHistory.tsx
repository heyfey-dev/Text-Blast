import React from 'react'
import { DataTable, Column } from '../../Components/admin/DataTable'
import { StatusBadge } from '../../Components/admin/StatusBar'
interface Transaction {
  id: string
  date: string
  email: string
  amount: number
  units: number
  reference: string
  channel: 'Paystack' | 'Manual'
  status: 'Successful' | 'Pending' | 'Failed'
}
const mockTransactions: Transaction[] = Array.from({
  length: 25,
})
  .map((_, i) => {
    const statuses: ('Successful' | 'Pending' | 'Failed')[] = [
      'Successful',
      'Successful',
      'Successful',
      'Pending',
      'Failed',
    ]
    const channels: ('Paystack' | 'Manual')[] = [
      'Paystack',
      'Paystack',
      'Paystack',
      'Manual',
    ]
    const status = statuses[Math.floor(Math.random() * statuses.length)]
    const channel = channels[Math.floor(Math.random() * channels.length)]
    const amount = [5000, 10000, 25000, 50000, 100000][
      Math.floor(Math.random() * 5)
    ]
    return {
      id: `TRX-${1000 + i}`,
      date: new Date(Date.now() - Math.random() * 10000000000).toLocaleString(
        'en-NG',
        {
          dateStyle: 'medium',
          timeStyle: 'short',
        },
      ),
      email: `user${i + 1}@example.com`,
      amount,
      units: amount / 4,
      reference:
        channel === 'Paystack'
          ? `PSK_${Math.random().toString(36).substring(2, 10).toUpperCase()}`
          : `MAN_${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
      channel,
      status,
    }
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
export default function TransactionHistory() {
  const columns: Column<Transaction>[] = [
    {
      header: 'Date',
      accessorKey: 'date',
      className: 'text-slate-500 whitespace-nowrap',
    },
    {
      header: 'User Email',
      accessorKey: 'email',
      className: 'font-medium text-slate-900',
    },
    {
      header: 'Amount',
      cell: (trx) => (
        <span className="font-medium">₦{trx.amount.toLocaleString()}</span>
      ),
    },
    {
      header: 'Units Added',
      cell: (trx) => (
        <span className="text-slate-600">
          {trx.units.toLocaleString()} units
        </span>
      ),
    },
    {
      header: 'Reference',
      cell: (trx) => (
        <span className="font-mono text-xs bg-slate-100 px-2 py-1 rounded text-slate-600">
          {trx.reference}
        </span>
      ),
    },
    {
      header: 'Channel',
      cell: (trx) => (
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${trx.channel === 'Paystack' ? 'bg-blue-50 text-blue-700' : 'bg-purple-50 text-purple-700'}`}
        >
          {trx.channel}
        </span>
      ),
    },
    {
      header: 'Status',
      cell: (trx) => (
        <StatusBadge
          status={trx.status}
          variant={
            trx.status === 'Successful'
              ? 'success'
              : trx.status === 'Pending'
                ? 'warning'
                : 'danger'
          }
        />
      ),
    },
  ]
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Transaction History
        </h1>
        <p className="text-slate-500 mt-1">
          View all wallet funding and payment logs.
        </p>
      </div>

      <DataTable
        data={mockTransactions}
        columns={columns}
        searchPlaceholder="Search by reference ID or email..."
        searchKey={(trx) => `${trx.reference} ${trx.email}`}
      />
    </div>
  )
}
