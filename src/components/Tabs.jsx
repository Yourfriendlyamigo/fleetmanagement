import React from 'react';

/**
 * Generic tab navigation component. Receives an array of tabs (with id and
 * label) and the currently active id. When a tab is clicked, onChange is
 * called with the new tab id.
 */
export default function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div className="flex border-b border-gray-200 space-x-4 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
            tab.id === activeTab
              ? 'text-blue border-b-2 border-blue'
              : 'text-black hover:text-blue-700'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}