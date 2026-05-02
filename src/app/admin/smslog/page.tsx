import React from 'react'
import { DataTable, Column } from '@/Components/admin/DataTable'
import { StatusBadge } from '@/Components/admin/StatusBar'
interface SmsLog {
  id: string
  time: string
  user: string
  senderId: string
  recipient: string
  status: 'Delivered' | 'Sent' | 'Failed'
}
const mockLogs: SmsLog[] = Array.from({
  length: 30,
})
  .map((_, i) => {
    const statuses: ('Delivered' | 'Sent' | 'Failed')[] = [
      'Delivered',
      'Delivered',
      'Delivered',
      'Delivered',
      'Sent',
      'Failed',
    ]
    const status = statuses[Math.floor(Math.random() * statuses.length)]
    const senderIds = ['TechCorp', 'SchoolAlert', 'PromoNG', 'OTP_Service']
    const senderId = senderIds[Math.floor(Math.random() * senderIds.length)]
    // Generate random Nigerian phone number
    const prefixes = [
      '803',
      '806',
      '813',
      '814',
      '816',
      '903',
      '906',
      '703',
      '706',
      '805',
      '807',
      '811',
      '815',
      '905',
      '802',
      '808',
      '812',
      '902',
      '907',
      '809',
      '817',
      '818',
      '909',
      '908',
    ]
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
    const number = Math.floor(Math.random() * 10000000)
      .toString()
      .padStart(7, '0')
    return {
      id: `LOG-${i}`,
      time: new Date(Date.now() - Math.random() * 86400000).toLocaleString(),
      user: `user${Math.floor(Math.random() * 10) + 1}@example.com`,
      senderId,
      recipient: `+234${prefix}${number}`,
      status,
    }
  })
  .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
export default function SmsLogs() {
  const columns: Column<SmsLog>[] = [
   {
  header: 'Time',
  cell: (log) => (
    <span className="text-slate-500 whitespace-nowrap text-sm">
      {new Date(log.time).toLocaleString('en-NG', {
        dateStyle: 'short',
        timeStyle: 'medium',
      })}
    </span>
  ),
},
    {
      header: 'User',
      accessorKey: 'user',
      className: 'text-slate-600',
    },
    {
      header: 'Sender ID',
      cell: (log) => (
        <span className="font-medium text-slate-900">{log.senderId}</span>
      ),
    },
    {
      header: 'Recipient',
      cell: (log) => (
        <span className="font-mono text-sm text-slate-600">
          {log.recipient}
        </span>
      ),
    },
    {
      header: 'Status',
      cell: (log) => (
        <StatusBadge
          status={log.status}
          variant={
            log.status === 'Delivered'
              ? 'success'
              : log.status === 'Sent'
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
        <h1 className="text-2xl font-bold text-slate-900">SMS Logs</h1>
        <p className="text-slate-500 mt-1">
          Real-time transparency of all messages sent through the platform.
        </p>
      </div>

      <DataTable
        data={mockLogs}
        columns={columns}
        searchPlaceholder="Search by phone number..."
        searchKey="recipient"
      />
    </div>
  )
}
