import React, { useState } from 'react';
import DashboardTile from '@/components/DashboardTile';
import DashboardStats from '@/components/DashboardStats';
import {
  Settings as VariablesIcon,
  Bell,
  FileText,
  ListChecks,
  Users,
  Truck,
  FileArchive,
  ShoppingCart,
  PackageOpen,
  Receipt,
  FilePlus,
  ClipboardList,
  Wallet,
  Briefcase,
  Boxes,
  Wrench,
  LineChart,
  ChevronDown,
  Banknote,
} from 'lucide-react';

const sections = [
  {
    title: 'Finance',
    icon: Wallet,
    items: [
      { label: 'Accounts', to: '/accounts', icon: Users },
      { label: 'Cash Flows', to: '/cash-flows', icon: Banknote },
      { label: 'Expenses', to: '/expenses', icon: ShoppingCart },
      { label: 'Purchase Orders', to: '/placeholders/Purchase%20Orders', icon: PackageOpen },
      { label: 'Items Purchases', to: '/placeholders/Items%20Purchases', icon: FilePlus },
    ],
  },
  {
    title: 'People (HR)',
    icon: Briefcase,
    items: [{ label: 'Employees', to: '/employees', icon: Users }],
  },
  {
    title: 'Assets & Compliance',
    icon: Truck,
    items: [
      { label: 'Vehicles', to: '/vehicles', icon: Truck },
      { label: 'Vehicle Documents', to: '/placeholders/Vehicle%20Documents', icon: FileArchive },
    ],
  },
  {
    title: 'Operations',
    icon: ClipboardList,
    items: [
      { label: 'Loading Orders', to: '/placeholders/Loading%20Orders', icon: ClipboardList },
      { label: 'Alerts', to: '/placeholders/Alerts', icon: Bell },
    ],
  },
  {
    title: 'Procurement & Catalogs',
    icon: Boxes,
    items: [{ label: 'Catalogs', to: '/catalogs', icon: ListChecks }],
  },
  {
    title: 'Analytics & Admin',
    icon: LineChart,
    items: [
      { label: 'Reports', to: '/reports', icon: FileText },
      { label: 'Variables', to: '/variables', icon: VariablesIcon },
    ],
  },
];

function Section({ title, icon: Icon, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg bg-white shadow">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3 text-left"
      >
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-secondary" />
          <span className="text-lg font-semibold text-secondary">{title}</span>
        </div>
        <ChevronDown
          className={`h-5 w-5 transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 border-t">
          {items.map((tile) => (
            <DashboardTile key={tile.label} {...tile} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* KPI stats */}
      <DashboardStats />

      {/* Collapsible sections */}
      {sections.map((section) => (
        <Section key={section.title} {...section} />
      ))}
    </div>
  );
}
