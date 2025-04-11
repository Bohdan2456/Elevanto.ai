import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function SuccessMessage() {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <CheckCircleIcon className="h-16 w-16 text-green-500" />
      </div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        Thank You!
      </h2>
      <p className="text-gray-600">
        Your feedback has been submitted successfully. We appreciate your time and will use your input to improve our services.
      </p>
    </div>
  );
} 