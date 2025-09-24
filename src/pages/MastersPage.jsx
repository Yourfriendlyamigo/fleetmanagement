import React from 'react';
import DashboardTile from '@/components/DashboardTile';
import {
  CreditCard,
  FileBadge2,
  Building2,
  Briefcase,
  Users,
  Banknote,
  MapPin,
  Truck,
  TruckIcon,
  FileText,
  ListChecks,
  Ship,
  Map,
  Package,
  Type,
  Landmark,
} from 'lucide-react';

export default function MastersPage() {
  const sections = [
    {
      title: 'Organization',
      items: [
        { label: 'Payment Modes', to: '/masters/payment-modes', icon: CreditCard },
        { label: 'Items Conditions', to: '/placeholders/Items%20Conditions', icon: FileBadge2 },
        { label: 'Companies', to: '/placeholders/Companies', icon: Building2 },
        { label: 'Departments', to: '/placeholders/Departments', icon: Briefcase },
      ],
    },
    {
      title: 'Employees',
      items: [
        { label: 'Employee Statuses', to: '/placeholders/Employee%20Statuses', icon: Users },
        { label: 'Banks', to: '/placeholders/Banks', icon: Landmark },
        { label: 'Fitment Position', to: '/placeholders/Fitment%20Position', icon: MapPin },
      ],
    },
    {
      title: 'Vehicles',
      items: [
        { label: 'Vehicle Types', to: '/placeholders/Vehicle%20Types', icon: Truck },
        { label: 'Vehicle Makes', to: '/placeholders/Vehicle%20Makes', icon: TruckIcon },
        { label: 'Vehicle Statuses', to: '/placeholders/Vehicle%20Statuses', icon: TruckIcon },
        { label: 'Vehicles Documents Names', to: '/placeholders/Vehicles%20Documents%20Names', icon: FileText },
        { label: 'Trailer Types', to: '/placeholders/Trailer%20Types', icon: Type },
      ],
    },
    {
      title: 'Catalogs',
      items: [
        { label: 'Catalogs Categories', to: '/placeholders/Catalogs%20Categories', icon: ListChecks },
      ],
    },
    {
      title: 'Logistics',
      items: [
        { label: 'Ships', to: '/placeholders/Ships', icon: Ship },
        { label: 'Places', to: '/placeholders/Places', icon: Map },
        { label: 'Products', to: '/placeholders/Products', icon: Package },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {sections.map((section) => (
        <div key={section.title}>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            {section.title}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {section.items.map((cat) => (
              <DashboardTile key={cat.label} {...cat} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
