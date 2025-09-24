import React from 'react';

export default function Field({ label, help, children }) {
  return (
    <label className="block">
      {label && <span className="fm-label">{label}</span>}
      {children}
      {help && <p className="fm-help">{help}</p>}
    </label>
  );
}
