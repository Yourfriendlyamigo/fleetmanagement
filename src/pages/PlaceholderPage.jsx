import React from 'react';
import { useParams } from 'react-router-dom';

/**
 * Placeholder page used for modules that were inaccessible in the original
 * application (spinner only). Displays a message indicating the page is
 * under construction.
 */
export default function PlaceholderPage() {
  const { title } = useParams();
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
      <h1 className="text-2xl font-semibold text-blue-800">{title}</h1>
      <p className="text-gray-600 max-w-md">
        This page is currently unavailable in the source application. A
        placeholder has been scaffolded here for future implementation.
      </p>
    </div>
  );
}