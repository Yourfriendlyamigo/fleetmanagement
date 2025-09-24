import React from 'react';

/**
 * Simple loading indicator displayed while pages/components are lazy loaded.
 */
export default function Loading() {
  return (
    <div className="flex items-center justify-center h-full w-full p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  );
}