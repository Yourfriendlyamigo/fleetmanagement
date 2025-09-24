import React, { useState } from 'react';

export default function ReportsPage() {
  const reports = ['Fleet Status', 'Expenses Summary', 'Accounts Overview'];
  const [selected, setSelected] = useState('');
  return (
    <div className="max-w-md space-y-4">
      <h1 className="text-xl font-semibold text-blue-800">Reports</h1>
      <label className="block text-sm font-medium text-gray-700">Select Report</label>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        <option value="">-- Choose a report --</option>
        {reports.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      {selected && (
        <div className="p-4 bg-gray-50 border rounded-md text-gray-600">
          Report "{selected}" would be displayed here.
        </div>
      )}
    </div>
  );
}