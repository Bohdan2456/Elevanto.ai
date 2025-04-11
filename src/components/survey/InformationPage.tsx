'use client'

import React, { useState } from 'react';

interface InformationPageProps {
  onSubmit: (data: {
    firstName: string;
    lastName: string;
    feedback: string;
  }) => void;
}

export default function InformationPage({ onSubmit }: InformationPageProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    feedback: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
        Thank you for your feedback!
      </h2>
      <p className="text-gray-600 mb-8 text-center">
        Please tell us a bit about yourself.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="feedback"
            className="block text-sm font-medium text-gray-700"
          >
            How can we improve our service?
          </label>
          <textarea
            id="feedback"
            name="feedback"
            rows={4}
            required
            value={formData.feedback}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            placeholder="Your feedback helps us improve..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 rounded-md bg-primary text-white font-medium hover:opacity-90 transition-all duration-200"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
} 