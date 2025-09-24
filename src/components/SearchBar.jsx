import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  Database,
  Code2,
  Settings,
  Shield,
  User,
} from 'lucide-react';

const navItems = [
  { label: 'Console', to: '/', icon: LayoutDashboard },
  { label: 'Masters', to: '/masters', icon: BookOpen },
  { label: 'Backups', to: '/backups', icon: Database },
  { label: 'Code Runners', to: '/code-runner', icon: Code2 },
  { label: 'System Settings', to: '/system-settings', icon: Settings },
  { label: 'Security', to: '/security', icon: Shield },
  { label: 'User Profile', to: '/user-profile', icon: User },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-gray-200 bg-white min-h-screen">
  {/* Logo / brand */}
  <div className="px-4 py-4">
    <h1 className="text-2xl font-bold tracking-wide text-black">
      FLEET MANAGER
    </h1>
    <p className="text-xs text-gray-500">Operations Console</p>
  </div>

  {/* Nav */}
  <nav className="px-2 space-y-1">
    {navItems.map((item) => {
      const Icon = item.icon;
      return (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            [
              'group flex items-center gap-3 rounded-md px-3 py-2 transition',
              'hover:bg-gray-100 hover:text-black',
              isActive
                ? 'text-black font-semibold bg-gray-100 border-l-4 border-black'
                : 'text-gray-700',
            ].join(' ')
          }
        >
          <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span className="truncate">{item.label}</span>
        </NavLink>
      );
    })}
  </nav>
</aside>

  );
}
