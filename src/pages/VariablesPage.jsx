import React from 'react';
import DataPageLayout from '@/components/DataPageLayout';
import { variables } from '@/mocks';

export default function VariablesPage() {
  const columns = [
    { key: 'id', header: '#' },
    { key: 'name', header: 'Name' },
    { key: 'value', header: 'Value' },
  ];
  const rowActions = [
    { label: 'Edit', onClick: (row) => console.log('Edit variable', row) },
  ];
  return (
    <DataPageLayout
      title="Variables"
      columns={columns}
      data={variables}
      rowActions={rowActions}
      onAddNew={() => console.log('Add new variable')}
      actionButtons={[
        { label: 'Search', onClick: () => {} },
        { label: 'Export to Excel', onClick: () => {} },
        { label: 'Reset', onClick: () => {} },
      ]}
    />
  );
}