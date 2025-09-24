import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';
import Loading from '@/components/Loading';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const VariablesPage = lazy(() => import('@/pages/VariablesPage'));
const CatalogsPage = lazy(() => import('@/pages/CatalogsPage'));
const AccountsPage = lazy(() => import('@/pages/AccountsPage'));
const CashFlowsPage = lazy(() => import('@/pages/CashFlowsPage'));
const EmployeesPage = lazy(() => import('@/pages/EmployeesPage'));
const VehiclesPage = lazy(() => import('@/pages/VehiclesPage'));
const ExpensesPage = lazy(() => import('@/pages/ExpensesPage'));
const MastersPage = lazy(() => import('@/pages/MastersPage'));
const PaymentModesPage = lazy(() => import('@/pages/PaymentModesPage'));
const BackupsPage = lazy(() => import('@/pages/BackupsPage'));
const CodeRunnerPage = lazy(() => import('@/pages/CodeRunnerPage'));
const SystemSettingsPage = lazy(() => import('@/pages/SystemSettingsPage'));
const SecurityPage = lazy(() => import('@/pages/SecurityPage'));
const UserProfilePage = lazy(() => import('@/pages/UserProfilePage'));
const ReportsPage = lazy(() => import('@/pages/ReportsPage'));
const PlaceholderPage = lazy(() => import('@/pages/PlaceholderPage'));
const VehicleFormPage = lazy(() => import('@/pages/VehicleFormPage'));
const VariableFormPage = lazy(() => import('@/pages/VariableFormPage'));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* Default page on load */}
          <Route index element={<Dashboard />} />

          <Route path="variables" element={<VariablesPage />} />
          <Route path="catalogs" element={<CatalogsPage />} />
          <Route path="accounts" element={<AccountsPage />} />
          <Route path="cash-flows" element={<CashFlowsPage />} />
          <Route path="employees" element={<EmployeesPage />} />
          <Route path="vehicles" element={<VehiclesPage />} />
          <Route path="vehicles/new" element={<VehicleFormPage mode="create" />} />
          <Route path="vehicles/:id/edit" element={<VehicleFormPage mode="edit" />} />
          <Route path="variables/new" element={<VariableFormPage mode="create" />} />
          <Route path="variables/:id/edit" element={<VariableFormPage mode="edit" />} />
          <Route path="expenses" element={<ExpensesPage />} />
          <Route path="masters" element={<MastersPage />} />
          <Route path="masters/payment-modes" element={<PaymentModesPage />} />
          <Route path="backups" element={<BackupsPage />} />
          <Route path="code-runner" element={<CodeRunnerPage />} />
          <Route path="system-settings" element={<SystemSettingsPage />} />
          <Route path="security" element={<SecurityPage />} />
          <Route path="user-profile" element={<UserProfilePage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="placeholders/:title" element={<PlaceholderPage />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
