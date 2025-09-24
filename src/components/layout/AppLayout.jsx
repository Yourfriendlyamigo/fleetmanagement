import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('sidebarCollapsed');
    if (saved !== null) setCollapsed(saved === '1');
  }, []);
  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', collapsed ? '1' : '0');
  }, [collapsed]);

  const toggleCollapsed = () => setCollapsed(v => !v);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Desktop sidebar */}
      <aside
        className={[
          'hidden md:block flex-shrink-0 border-r bg-white shadow-sm transition-all duration-300 ease-in-out',
          collapsed ? 'w-16' : 'w-64',
        ].join(' ')}
      >
        <Sidebar collapsed={collapsed} onToggleCollapsed={toggleCollapsed} />
      </aside>

      {/* Mobile drawer */}
      <div
        className={[
          'fixed inset-y-0 left-0 z-40 w-64 bg-white border-r shadow-lg transition-transform duration-300 md:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        ].join(' ')}
      >
        <Sidebar collapsed={false} onToggleCollapsed={toggleCollapsed} />
      </div>
      {mobileOpen && (
        <button
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-label="Close sidebar overlay"
        />
      )}

      {/* Main area */}
      <div className="flex flex-1 min-w-0 flex-col overflow-hidden">
        <TopBar onOpenMobile={() => setMobileOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {/* 👇 Pages render here */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
