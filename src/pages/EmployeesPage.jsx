import React from 'react';
import DataPageLayout from '@/components/DataPageLayout';
import { employees } from '@/mocks';

export default function EmployeesPage() {
  const columns = [
    { key: 'id', header: '#' },
    { key: 'name', header: 'Name' },
    { key: 'idNumber', header: 'ID Number' },
    { key: 'company', header: 'Company' },
    { key: 'department', header: 'Department' },
    { key: 'title', header: 'Title' },
  ];
  const rowActions = [
    { label: 'Edit', onClick: (row) => console.log('Edit employee', row) },
  ];
  return (
    <DataPageLayout
      title="Employees"
      columns={columns}
      data={employees}
      rowActions={rowActions}
      onAddNew={() => console.log('Add new employee')}
      actionButtons={[
        { label: 'Search', onClick: () => {} },
        { label: 'Export to Excel', onClick: () => {} },
        { label: 'Reset', onClick: () => {} },
      ]}
    />
  );
}