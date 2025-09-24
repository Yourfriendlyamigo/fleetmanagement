import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Bell, Menu } from 'lucide-react';

export default function TopBar({ onOpenMobile }) {
  // Replace with your actual unread state
  const hasUnread = true;

  return (
    <header className="flex items-center justify-between px-4 py-3 border-b bg-white shadow-sm">
      <div className="flex items-center gap-2">
        {/* Mobile hamburger only */}
        <button
          onClick={onOpenMobile}
          className="md:hidden p-2 rounded hover:bg-gray-100"
          aria-label="Open sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Home */}
        <Link to="/" className="flex items-center gap-2">
          <Home className="h-5 w-5 text-black" />
          <span className="text-sm font-semibold text-black">Main Menu</span>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        {/* Notification bell with red dot */}
        <Link to="/placeholders/Alerts" aria-label="Alerts" className="relative">
          <Bell className="h-5 w-5 text-blue-600 hover:text-blue-800 transition" />
          {hasUnread && (
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500"></span>
          )}
        </Link>

        {/* User avatar */}
        <div className="h-7 w-7 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 text-xs font-bold">
          A
        </div>
      </div>
    </header>
  );
}
