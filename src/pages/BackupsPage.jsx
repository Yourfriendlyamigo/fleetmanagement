import React, { useState } from 'react';
import Tabs from '@/components/Tabs';
import DataTable from '@/components/DataTable';

// Example backup records for SQL, CSV, and Files backups.
const sqlBackups = [
  { id: 1, initiator: 'User', category: 'SQL', path: '\\SQL\\2023_09_01\\backup.sql', createdBy: 'admin', createdOn: '01-Sep-2023 10:00' },
];
const csvBackups = [
  { id: 1, initiator: 'System', category: 'CSV', path: '\\CSV\\2023_09_01\\backup.csv', createdBy: 'system', createdOn: '01-Sep-2023 09:00' },
];
const fileBackups = [
  { id: 1, initiator: 'System', category: 'Files', path: '\\FILES\\2023_09_01\\backup.zip', createdBy: 'system', createdOn: '01-Sep-2023 08:00' },
];

export default function BackupsPage() {
  const tabs = [
    { id: 'sql', label: 'SQL Backups' },
    { id: 'csv', label: 'CSV Backups' },
    { id: 'files', label: 'Files Backups' },
  ];
  const [activeTab, setActiveTab] = useState('sql');

  // Determine which dataset and columns to display based on active tab.
  let records = [];
  switch (activeTab) {
    case 'sql':
      records = sqlBackups;
      break;
    case 'csv':
      records = csvBackups;
      break;
    case 'files':
      records = fileBackups;
      break;
    default:
      records = [];
  }
  const columns = [
    { key: 'id', header: '#' },
    { key: 'initiator', header: 'Initiator' },
    { key: 'category', header: 'Category' },
    { key: 'path', header: 'Path' },
    { key: 'createdBy', header: 'Created By' },
    { key: 'createdOn', header: 'Created On' },
  ];
  const rowActions = [
    { label: 'View Files', onClick: (row) => console.log('View files', row) },
    { label: 'Delete', onClick: (row) => console.log('Delete backup', row) },
  ];
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-blue-800">Backups</h1>
      {/* Top actions */}
      <div className="flex flex-wrap gap-2">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
          Refresh Backups
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
          Run All Backups
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
          Reset Backups
        </button>
      </div>
      {/* Section tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      {/* Run backup button for active tab */}
      <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700">
        Run {tabs.find((t) => t.id === activeTab)?.label?.split(' ')[0]} Backup
      </button>
      {/* Data table */}
      <DataTable columns={columns} data={records} rowActions={rowActions} />
    </div>
  );
}