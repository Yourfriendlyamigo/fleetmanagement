import React from 'react';
import { useNavigate } from 'react-router-dom';
import DataPageLayout from '@/components/DataPageLayout';
import { vehicles } from '@/mocks';

export default function VehiclesPage() {
  const navigate = useNavigate();

  const columns = [
    { key: 'id', header: '#' },
    { key: 'regNumber', header: 'Reg Number' },
    { key: 'type', header: 'Type' },
    { key: 'make', header: 'Make' },
    { key: 'company', header: 'Company' },
    { key: 'status', header: 'Status' },
  ];

  const rowActions = [
    { label: 'Edit', onClick: (row) => navigate(`/vehicles/${row.id}/edit`) },
  ];

  return (
    <DataPageLayout
      title="Vehicles"
      columns={columns}
      data={vehicles}
      rowActions={rowActions}
      onAddNew={() => navigate('/vehicles/new')}
      actionButtons={[
        { label: 'Search', onClick: () => {} },
        { label: 'Export to Excel', onClick: () => {} },
        { label: 'Reset', onClick: () => {} },
      ]}
    />
  );
}
