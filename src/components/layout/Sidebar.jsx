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
  ChevronLeft,
} from 'lucide-react';

const navItems = [
  { label: 'Main Menu', to: '/', icon: LayoutDashboard },
  { label: 'Company Settings', to: '/masters', icon: BookOpen },
  { label: 'Backups', to: '/backups', icon: Database },
  { label: 'Code Runners', to: '/code-runner', icon: Code2 },
  { label: 'System Settings', to: '/system-settings', icon: Settings },
  { label: 'Security', to: '/security', icon: Shield },
  { label: 'User Profile', to: '/user-profile', icon: User },
];

export default function Sidebar({ collapsed, onToggleCollapsed }) {
  return (
    <aside
      className={`relative border-r border-gray-200 bg-white min-h-screen transition-all duration-300 ease-in-out
      ${collapsed ? 'w-16' : 'w-64'}`}
    >
      {/* Round collapse button (desktop only) */}
      <button
        type="button"
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        title={collapsed ? 'Expand' : 'Collapse'}
        onClick={onToggleCollapsed}
        className="hidden md:flex absolute -right-3 top-6 h-6 w-6 items-center justify-center rounded-full border bg-white shadow hover:bg-gray-50"
      >
        <ChevronLeft
          className={`h-4 w-4 transition-transform ${collapsed ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Brand */}
      <div className={`px-4 py-4 ${collapsed ? 'flex justify-center' : ''}`}>
        {collapsed ? (
          <div className="h-9 w-9 rounded-md bg-black text-white grid place-items-center font-bold">
            FM
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold tracking-wide text-black">
              FLEET MANAGER
            </h1>
            <p className="text-xs text-gray-500">Operations Console</p>
          </>
        )}
      </div>

      {/* Nav */}
      <nav className="px-2 space-y-1">
        {navItems.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            title={label}
            className={({ isActive }) =>
              [
                'group flex items-center rounded-md px-3 py-2 transition',
                collapsed ? 'justify-center' : 'gap-3',
                'hover:bg-gray-100 hover:text-black',
                isActive
                  ? 'text-black font-semibold bg-gray-100 border-l-4 border-black'
                  : 'text-gray-700',
              ].join(' ')
            }
          >
            <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
            {!collapsed && <span className="truncate">{label}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="h-6" />
    </aside>
  );
}
