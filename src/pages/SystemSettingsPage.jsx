import React, { useState } from 'react';
import Tabs from '@/components/Tabs';
import ToggleSwitch from '@/components/ToggleSwitch';
import SearchBar from '@/components/SearchBar';
import ActionButtons from '@/components/ActionButtons';

export default function SystemSettingsPage() {
  const tabs = [
    { id: 'general', label: 'General Settings' },
    { id: 'smtp', label: 'SMTP Settings' },
    { id: 'domains', label: 'Allowed Domains Settings' },
    { id: 'ips', label: 'Allowed IPS Settings' },
  ];
  const [activeTab, setActiveTab] = useState('general');
  const [search, setSearch] = useState('');
  // Example general settings
  const [settings, setSettings] = useState([
    { name: 'admin PrivateSideBarExpandedSetting', value: true },
    { name: 'main SidebarExpanded', value: false },
    { name: 'theme DarkMode', value: false },
  ]);
  const filteredSettings = settings.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleToggle = (index, newValue) => {
    setSettings((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], value: newValue };
      return copy;
    });
  };

  const renderTabContent = () => {
    if (activeTab === 'general') {
      return (
        <>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-4">
            <SearchBar value={search} onChange={setSearch} placeholder="Search settings" showDropdown={false} />
            <ActionButtons
              actions={[
                { label: 'Search', onClick: () => {} },
                { label: 'Export to Excel', onClick: () => {} },
                { label: 'Reset', onClick: () => {} },
              ]}
            />
          </div>
          {/* Settings table */}
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full divide-y divide-gray-200 bg-white border border-gray-200 rounded-md">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">Name</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredSettings.map((setting, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-3 py-2 text-sm text-gray-800">{setting.name}</td>
                    <td className="px-3 py-2 text-sm text-gray-800">
                      <ToggleSwitch
                        checked={setting.value}
                        onChange={(val) => handleToggle(idx, val)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      );
    }
    // For other tabs show blank
    return <div className="p-4 text-gray-600">No settings in this section.</div>;
  };

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-blue-800">System Settings</h1>
      <div className="flex flex-wrap gap-2">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700">
            Add New
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
            Switch on Production Settings
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
            Switch on Development Settings
          </button>
      </div>
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      {renderTabContent()}
    </div>
  );
}