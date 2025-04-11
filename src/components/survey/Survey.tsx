'use client'

import React, { useState } from 'react';
import RatingPage from './RatingPage';
import InformationPage from './InformationPage';
import SuccessMessage from './SuccessMessage';

interface SurveyData {
  rating: number;
  firstName: string;
  lastName: string;
  feedback: string;
}

export default function Survey() {
  const [currentPage, setCurrentPage] = useState<'rating' | 'information' | 'success'>('rating');
  const [surveyData, setSurveyData] = useState<SurveyData>({
    rating: 0,
    firstName: '',
    lastName: '',
    feedback: ''
  });

  const handleRatingSubmit = (rating: number) => {
    setSurveyData(prev => ({ ...prev, rating }));
    setCurrentPage('information');
  };

  const handleInformationSubmit = async (data: Omit<SurveyData, 'rating'>) => {
    const completeData = { ...surveyData, ...data };
    
    // Here you would typically send the data to your backend
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Survey submitted:', completeData);
      setCurrentPage('success');
    } catch (error) {
      console.error('Error submitting survey:', error);
      // Handle error appropriately
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-900 px-6 py-4">
            <h1 className="text-xl font-semibold text-white text-center">
              Customer Feedback Survey
            </h1>
          </div>
          
          <div className="p-6">
            {currentPage === 'rating' && (
              <RatingPage onSubmit={handleRatingSubmit} />
            )}
            
            {currentPage === 'information' && (
              <InformationPage onSubmit={handleInformationSubmit} />
            )}
            
            {currentPage === 'success' && (
              <SuccessMessage />
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 