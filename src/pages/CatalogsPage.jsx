import React from 'react';
import DataPageLayout from '@/components/DataPageLayout';
import { catalogs } from '@/mocks';

export default function CatalogsPage() {
  const columns = [
    { key: 'id', header: '#' },
    { key: 'name', header: 'Name' },
    { key: 'category', header: 'Category' },
    { key: 'unitPrice', header: 'Unit Price' },
    { key: 'balance', header: 'Balance' },
  ];
  const rowActions = [
    { label: 'Load Balance', onClick: (row) => console.log('Load balance', row) },
    { label: 'Edit', onClick: (row) => console.log('Edit catalog', row) },
  ];
  return (
    <DataPageLayout
      title="Catalogs"
      columns={columns}
      data={catalogs}
      rowActions={rowActions}
      onAddNew={() => console.log('Add new catalog')}
      actionButtons={[
        { label: 'Search', onClick: () => {} },
        { label: 'Export to Excel', onClick: () => {} },
        { label: 'Reset', onClick: () => {} },
      ]}
    />
  );
}