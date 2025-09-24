import React, { useState } from 'react';
import Tabs from '@/components/Tabs';

export default function CodeRunnerPage() {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'coders', label: 'Coders' },
    { id: 'dates', label: 'Dates Test' },
    { id: 'email', label: 'Email Client' },
    { id: 'localStorage', label: 'Local Storage' },
    { id: 'sessionStorage', label: 'Session Storage' },
    { id: 'devices', label: 'Devices In' },
  ];
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    if (activeTab === 'home') {
      const buttons = [
        { label: 'Run Code Generation', onClick: () => {} },
        { label: 'Run Code', onClick: () => {} },
        { label: 'Run Reset', onClick: () => {} },
        { label: 'Load Verification Token', onClick: () => {} },
        { label: 'Report Viewer', onClick: () => {} },
      ];
      return (
        <div className="flex flex-col gap-3 mt-4">
          {buttons.map((btn) => (
            <button
              key={btn.label}
              onClick={btn.onClick}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              {btn.label}
            </button>
          ))}
        </div>
      );
    }
    // Other tabs are placeholders
    return (
      <div className="p-4 text-gray-600">Content for this tab is not implemented.</div>
    );
  };

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-blue-800">Code Runner</h1>
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      {renderContent()}
    </div>
  );
}