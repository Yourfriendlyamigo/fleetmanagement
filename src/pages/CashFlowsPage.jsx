import React from 'react';
import DataPageLayout from '@/components/DataPageLayout';
import { cashFlows } from '@/mocks';

export default function CashFlowsPage() {
  const columns = [
    { key: 'id', header: '#' },
    { key: 'code', header: 'Code' },
    { key: 'amount', header: 'Amount' },
    { key: 'currency', header: 'Currency' },
    { key: 'exchangeRate', header: 'Exchange Rate' },
    { key: 'source', header: 'Source Account' },
    { key: 'destination', header: 'Destination Account' },
  ];
  const rowActions = [
    { label: 'Edit', onClick: (row) => console.log('Edit cash flow', row) },
  ];
  return (
    <DataPageLayout
      title="Cash Flows"
      columns={columns}
      data={cashFlows}
      rowActions={rowActions}
      onAddNew={() => console.log('Add new cash flow')}
      actionButtons={[
        { label: 'Search', onClick: () => {} },
        { label: 'Export to Excel', onClick: () => {} },
        { label: 'Reset', onClick: () => {} },
      ]}
    />
  );
}