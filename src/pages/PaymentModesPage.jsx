import React from 'react';
import DataPageLayout from '@/components/DataPageLayout';
import { paymentModes } from '@/mocks';

export default function PaymentModesPage() {
  const columns = [
    { key: 'id', header: '#' },
    { key: 'mode', header: 'Mode' },
  ];
  const rowActions = [
    { label: 'Edit', onClick: (row) => console.log('Edit payment mode', row) },
  ];
  return (
    <DataPageLayout
      title="Payment Modes"
      columns={columns}
      data={paymentModes}
      rowActions={rowActions}
      onAddNew={() => console.log('Add new payment mode')}
      actionButtons={[
        { label: 'Search', onClick: () => {} },
        { label: 'Reset', onClick: () => {} },
      ]}
    />
  );
}