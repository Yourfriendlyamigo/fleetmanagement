// Mock data used for the Fleet Manager clone. These arrays simulate
// server‑returned data so the UI renders without a backend. The shapes
// mirror the columns observed during the crawl.

export const variables = [
  { id: 1, name: 'FuelRate', value: '2.50' },
  { id: 2, name: 'TaxRate', value: '18%' },
  { id: 3, name: 'ExchangeRate', value: '2300' },
];

export const catalogs = [
  { id: 1, name: 'Engine Oil', category: 'Consumable', unitPrice: '$20', balance: 100 },
  { id: 2, name: 'Tyre', category: 'Spare Part', unitPrice: '$80', balance: 25 },
];

export const accounts = [
  { id: 1, name: 'John Doe', mobile: '+255123456789', email: 'john@example.com', category: 'Driver' },
  { id: 2, name: 'Jane Smith', mobile: '+255987654321', email: 'jane@example.com', category: 'Manager' },
];

export const cashFlows = [
  {
    id: 1,
    code: 'CF001',
    amount: '1000',
    currency: 'USD',
    exchangeRate: '2300',
    source: 'Main Account',
    destination: 'Fuel Account',
  },
];

export const employees = [
  { id: 1, name: 'Asha Mlingi', idNumber: 'EMP001', company: 'Main', department: 'Logistics', title: 'Driver' },
  { id: 2, name: 'Bakari Juma', idNumber: 'EMP002', company: 'Main', department: 'Operations', title: 'Manager' },
];

export const vehicles = [
  { id: 1, regNumber: 'T123 ABC', type: 'Truck', make: 'HOWO', company: 'Main', status: 'Working' },
  { id: 2, regNumber: 'T456 XYZ', type: 'Trailer', make: 'Scania', company: 'Main', status: 'Working' },

  { id: 3, regNumber: 'T101 DEF', type: 'Truck', make: 'Volvo', company: 'Main', status: 'Working' },
  { id: 4, regNumber: 'T102 GHI', type: 'Truck', make: 'Isuzu', company: 'Main', status: 'Working' },
  { id: 5, regNumber: 'T103 JKL', type: 'Truck', make: 'Mercedes', company: 'Main', status: 'Working' },
  { id: 6, regNumber: 'T104 MNO', type: 'Trailer', make: 'Fuso', company: 'Main', status: 'Working' },
  { id: 7, regNumber: 'T105 PQR', type: 'Truck', make: 'MAN', company: 'Main', status: 'Working' },
  { id: 8, regNumber: 'T106 STU', type: 'Trailer', make: 'Hino', company: 'Main', status: 'Working' },
  { id: 9, regNumber: 'T107 VWX', type: 'Truck', make: 'HOWO', company: 'Main', status: 'Working' },
  { id: 10, regNumber: 'T108 YZA', type: 'Truck', make: 'Volvo', company: 'Main', status: 'Working' },

  { id: 11, regNumber: 'T109 BCD', type: 'Truck', make: 'Scania', company: 'Main', status: 'Working' },
  { id: 12, regNumber: 'T110 EFG', type: 'Trailer', make: 'Mercedes', company: 'Main', status: 'Working' },
  { id: 13, regNumber: 'T111 HIJ', type: 'Truck', make: 'Isuzu', company: 'Main', status: 'Working' },
  { id: 14, regNumber: 'T112 KLM', type: 'Truck', make: 'Fuso', company: 'Main', status: 'Working' },
  { id: 15, regNumber: 'T113 NOP', type: 'Truck', make: 'Hino', company: 'Main', status: 'Working' },
  { id: 16, regNumber: 'T114 QRS', type: 'Trailer', make: 'MAN', company: 'Main', status: 'Working' },
  { id: 17, regNumber: 'T115 TUV', type: 'Truck', make: 'HOWO', company: 'Main', status: 'Working' },
  { id: 18, regNumber: 'T116 WXY', type: 'Truck', make: 'Scania', company: 'Main', status: 'Working' },
  { id: 19, regNumber: 'T117 ZAB', type: 'Trailer', make: 'Volvo', company: 'Main', status: 'Working' },
  { id: 20, regNumber: 'T118 CDE', type: 'Truck', make: 'Mercedes', company: 'Main', status: 'Working' },

  { id: 21, regNumber: 'T119 FGH', type: 'Truck', make: 'Isuzu', company: 'Main', status: 'Working' },
  { id: 22, regNumber: 'T120 IJK', type: 'Trailer', make: 'Fuso', company: 'Main', status: 'Working' },
  { id: 23, regNumber: 'T121 LMN', type: 'Truck', make: 'MAN', company: 'Main', status: 'Working' },
  { id: 24, regNumber: 'T122 OPQ', type: 'Truck', make: 'HOWO', company: 'Main', status: 'Working' },
  { id: 25, regNumber: 'T123 RST', type: 'Truck', make: 'Hino', company: 'Main', status: 'Working' },
  { id: 26, regNumber: 'T124 UVW', type: 'Trailer', make: 'Volvo', company: 'Main', status: 'Working' },
  { id: 27, regNumber: 'T125 XYZ', type: 'Truck', make: 'Scania', company: 'Main', status: 'Working' },
  { id: 28, regNumber: 'T126 ABC', type: 'Truck', make: 'Mercedes', company: 'Main', status: 'Working' },
  { id: 29, regNumber: 'T127 DEF', type: 'Trailer', make: 'Isuzu', company: 'Main', status: 'Working' },
  { id: 30, regNumber: 'T128 GHI', type: 'Truck', make: 'Fuso', company: 'Main', status: 'Working' },

  { id: 31, regNumber: 'T129 JKL', type: 'Truck', make: 'HOWO', company: 'Main', status: 'Working' },
  { id: 32, regNumber: 'T130 MNO', type: 'Truck', make: 'Volvo', company: 'Main', status: 'Working' },
  { id: 33, regNumber: 'T131 PQR', type: 'Trailer', make: 'MAN', company: 'Main', status: 'Working' },
  { id: 34, regNumber: 'T132 STU', type: 'Truck', make: 'Hino', company: 'Main', status: 'Working' },
  { id: 35, regNumber: 'T133 VWX', type: 'Truck', make: 'Scania', company: 'Main', status: 'Working' },
  { id: 36, regNumber: 'T134 YZA', type: 'Trailer', make: 'Mercedes', company: 'Main', status: 'Working' },
  { id: 37, regNumber: 'T135 BCD', type: 'Truck', make: 'Isuzu', company: 'Main', status: 'Working' },
  { id: 38, regNumber: 'T136 EFG', type: 'Truck', make: 'Fuso', company: 'Main', status: 'Working' },
  { id: 39, regNumber: 'T137 HIJ', type: 'Trailer', make: 'Volvo', company: 'Main', status: 'Working' },
  { id: 40, regNumber: 'T138 KLM', type: 'Truck', make: 'HOWO', company: 'Main', status: 'Working' },

  { id: 41, regNumber: 'T139 NOP', type: 'Truck', make: 'Scania', company: 'Main', status: 'Working' },
  { id: 42, regNumber: 'T140 QRS', type: 'Trailer', make: 'Mercedes', company: 'Main', status: 'Working' },
  { id: 43, regNumber: 'T141 TUV', type: 'Truck', make: 'Hino', company: 'Main', status: 'Working' },
  { id: 44, regNumber: 'T142 WXY', type: 'Truck', make: 'Isuzu', company: 'Main', status: 'Working' },
  { id: 45, regNumber: 'T143 ZAB', type: 'Truck', make: 'Fuso', company: 'Main', status: 'Working' },
  { id: 46, regNumber: 'T144 CDE', type: 'Trailer', make: 'MAN', company: 'Main', status: 'Working' },
  { id: 47, regNumber: 'T145 FGH', type: 'Truck', make: 'Volvo', company: 'Main', status: 'Working' },
  { id: 48, regNumber: 'T146 IJK', type: 'Truck', make: 'HOWO', company: 'Main', status: 'Working' },
  { id: 49, regNumber: 'T147 LMN', type: 'Trailer', make: 'Scania', company: 'Main', status: 'Working' },
  { id: 50, regNumber: 'T148 OPQ', type: 'Truck', make: 'Mercedes', company: 'Main', status: 'Working' },

  { id: 51, regNumber: 'T149 RST', type: 'Truck', make: 'Isuzu', company: 'Main', status: 'Working' },
  { id: 52, regNumber: 'T150 UVW', type: 'Truck', make: 'Fuso', company: 'Main', status: 'Working' },
  { id: 53, regNumber: 'T151 XYZ', type: 'Truck', make: 'Hino', company: 'Main', status: 'Working' },
  { id: 54, regNumber: 'T152 ABC', type: 'Trailer', make: 'MAN', company: 'Main', status: 'Working' },
  { id: 55, regNumber: 'T153 DEF', type: 'Truck', make: 'Scania', company: 'Main', status: 'Working' },
  { id: 56, regNumber: 'T154 GHI', type: 'Truck', make: 'Volvo', company: 'Main', status: 'Working' },
  { id: 57, regNumber: 'T155 JKL', type: 'Trailer', make: 'HOWO', company: 'Main', status: 'Working' },
  { id: 58, regNumber: 'T156 MNO', type: 'Truck', make: 'Mercedes', company: 'Main', status: 'Working' },
  { id: 59, regNumber: 'T157 PQR', type: 'Truck', make: 'Isuzu', company: 'Main', status: 'Working' },
  { id: 60, regNumber: 'T158 STU', type: 'Truck', make: 'Hino', company: 'Main', status: 'Working' },
];


export const expenses = [
  {
    id: 1,
    expenseAccount: '24_THOMAS GARNER',
    sourceAccount: '136_FINLEY GILMORE',
    paymentMode: 'Cash',
    currency: 'USD',
    exchangeRate: '2300',
  },
];

export const paymentModes = [
  { id: 1, mode: 'Cash' },
  { id: 2, mode: 'Cheque' },
  { id: 3, mode: 'Internet Bank Transfer' },
  { id: 4, mode: 'Mobile Transfer' },
  { id: 5, mode: 'Online' },
  { id: 6, mode: 'Paypal' },
];