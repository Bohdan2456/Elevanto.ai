'use client'

import React, { useState } from 'react';
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';

interface RatingPageProps {
  onSubmit: (rating: number) => void;
}

export default function RatingPage({ onSubmit }: RatingPageProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        Thanks for choosing our business!
      </h2>
      <p className="text-gray-600 mb-8">
        How would you rate our services?
      </p>

      <div className="flex flex-col items-center space-y-4 mb-8">
        {[5, 4, 3, 2, 1].map((star) => (
          <button
            key={star}
            className="group flex items-center space-x-4 p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 w-full max-w-xs"
            onClick={() => handleStarClick(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            type="button"
            aria-label={`Rate ${star} stars`}
          >
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="p-0.5">
                  {index < star ? (
                    <StarSolid
                      className={`h-8 w-8 ${
                        index < (hoveredRating || rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ) : (
                    <StarOutline
                      className={`h-8 w-8 ${
                        index < (hoveredRating || rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  )}
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-600 group-hover:text-gray-900">
              {star} star{star !== 1 ? 's' : ''}
            </span>
          </button>
        ))}
      </div>

      <button
        onClick={() => rating > 0 && onSubmit(rating)}
        disabled={rating === 0}
        className={`w-full py-3 px-4 rounded-md text-white font-medium transition-all duration-200 ${
          rating > 0
            ? 'bg-primary hover:opacity-90'
            : 'bg-gray-300 cursor-not-allowed'
        }`}
      >
        Next
      </button>
    </div>
  );
} 