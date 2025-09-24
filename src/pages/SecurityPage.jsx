import React, { useState } from 'react';
import Tabs from '@/components/Tabs';
import DataTable from '@/components/DataTable';

// Example permissions rows
const permissionRows = [
  {
    id: 1,
    name: 'AccountEdit',
    permissions: '[SuperUser,Admin,Account Edit]',
    routes: '/Account_Edit',
  },
  {
    id: 2,
    name: 'Accounts',
    permissions: '[SuperUser,Admin,Account Edit]',
    routes: '/Accounts',
  },
];

export default function SecurityPage() {
  const tabs = [
    { id: 'generation', label: 'Permissions Generation' },
    { id: 'permissions', label: 'Permissions' },
    { id: 'users', label: 'Users' },
    { id: 'usersPermissions', label: 'Users Permissions' },
    { id: 'logs', label: 'System Logs' },
    { id: 'records', label: 'Records Act' },
  ];
  const [activeTab, setActiveTab] = useState('generation');

  const columns = [
    { key: 'id', header: '#' },
    { key: 'name', header: 'Name' },
    { key: 'permissions', header: 'Permissions' },
    { key: 'routes', header: 'Routes' },
  ];
  const rowActions = [
    { label: 'Generate', onClick: (row) => console.log('Generate page permissions', row) },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-blue-800">Security</h1>
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      {activeTab === 'generation' ? (
        <div className="space-y-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700">
            Generate All Permissions
          </button>
          <DataTable columns={columns} data={permissionRows} rowActions={rowActions} />
        </div>
      ) : (
        <div className="p-4 text-gray-600">Content for this tab is not implemented.</div>
      )}
    </div>
  );
}