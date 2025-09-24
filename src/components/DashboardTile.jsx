import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardTile({ icon: Icon, label, to }) {
  return (
    <Link
      to={to}
      className="flex flex-col items-center justify-center 
                 border border-brandBlue bg-white text-brandBlue 
                 rounded-md p-6 transition hover:bg-blue-50 hover:shadow"
    >
      {Icon && <Icon className="h-8 w-8 mb-2 text-brandBlue" />}
      <span className="text-sm font-medium text-center break-words">
        {label}
      </span>
    </Link>
  );
}
