import React from 'react';

/**
 * Renders a horizontal list of action buttons.
 * Buttons are transparent by default and only show styling when hovered or clicked.
 */
export default function ActionButtons({ actions = [] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {actions.map(({ label, onClick, variant = 'neutral' }) => (
        <button
          key={label}
          onClick={onClick}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none
            ${
              variant === 'primary'
                ? 'text-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-700'
                : variant === 'secondary'
                ? 'text-green-600 hover:bg-green-600 hover:text-white active:bg-green-700'
                : variant === 'danger'
                ? 'text-red-600 hover:bg-red-600 hover:text-white active:bg-red-700'
                : 'text-gray-600 hover:bg-gray-100 hover:text-black active:bg-gray-200'
            }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
