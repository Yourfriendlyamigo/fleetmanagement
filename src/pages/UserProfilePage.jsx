import React, { useState } from 'react';
import Tabs from '@/components/Tabs';

export default function UserProfilePage() {
  const tabs = [
    { id: 'credentials', label: 'Credentials Management' },
    { id: 'cache', label: 'Cache Management' },
  ];
  const [activeTab, setActiveTab] = useState('credentials');
  // Mock user info
  const user = { userName: 'admin', lastLogin: 'N/A', lastActivity: 'N/A' };
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const handleUpdate = () => {
    console.log('Update password', oldPassword, newPassword);
  };
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-blue-800">User Profile</h1>
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      {activeTab === 'credentials' ? (
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="text-gray-800">
              <span className="font-medium">User Name:</span> {user.userName}
            </div>
            <div className="text-gray-800">
              <span className="font-medium">Last Login:</span> {user.lastLogin}
            </div>
            <div className="text-gray-800">
              <span className="font-medium">Last Activity:</span> {user.lastActivity}
            </div>
          </div>
          <div className="border-t pt-4">
            <h2 className="font-medium text-gray-700 mb-2">Update Password</h2>
            <div className="space-y-2 max-w-sm">
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Old Password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New Password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                onClick={handleUpdate}
                className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700"
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 text-gray-600">Cache management is not implemented.</div>
      )}
    </div>
  );
}