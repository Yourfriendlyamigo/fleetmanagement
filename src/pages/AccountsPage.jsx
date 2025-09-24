import React from 'react';
import DataPageLayout from '@/components/DataPageLayout';
import { accounts } from '@/mocks';

export default function AccountsPage() {
  const columns = [
    { key: 'id', header: '#' },
    { key: 'name', header: 'Name' },
    { key: 'mobile', header: 'Mobile Number' },
    { key: 'email', header: 'Email' },
    { key: 'category', header: 'Category' },
  ];
  const rowActions = [
    { label: 'Edit', onClick: (row) => console.log('Edit account', row) },
  ];
  return (
    <DataPageLayout
      title="Accounts"
      columns={columns}
      data={accounts}
      rowActions={rowActions}
      onAddNew={() => console.log('Add new account')}
      actionButtons={[
        { label: 'Search', onClick: () => {} },
        { label: 'Export to Excel', onClick: () => {} },
        { label: 'Reset', onClick: () => {} },
      ]}
    />
  );
}