import React from 'react';
import DataPageLayout from '@/components/DataPageLayout';
import { expenses } from '@/mocks';

export default function ExpensesPage() {
  const columns = [
    { key: 'id', header: '#' },
    { key: 'expenseAccount', header: 'Expense Account' },
    { key: 'sourceAccount', header: 'Source Account' },
    { key: 'paymentMode', header: 'Payment Mode' },
    { key: 'currency', header: 'Currency' },
    { key: 'exchangeRate', header: 'Exchange Rate' },
  ];
  const rowActions = [
    { label: 'Edit', onClick: (row) => console.log('Edit expense', row) },
  ];
  return (
    <DataPageLayout
      title="Expenses"
      columns={columns}
      data={expenses}
      rowActions={rowActions}
      onAddNew={() => console.log('Add new expense')}
      actionButtons={[
        { label: 'Search', onClick: () => {} },
        { label: 'Export to Excel', onClick: () => {} },
        { label: 'Reset', onClick: () => {} },
      ]}
    />
  );
}