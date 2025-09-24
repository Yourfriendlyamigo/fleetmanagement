import React from 'react';

export default function FormGrid({ cols = 2, children }) {
  const map = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
  };
  return <div className={`grid gap-5 ${map[cols]}`}>{children}</div>;
}
