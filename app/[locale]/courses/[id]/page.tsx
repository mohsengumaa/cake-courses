'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import AIChatbot from '@/components/AIChatbot';
import LanguageSwitcher from '@/components/LanguageSwitcher';


interface Course {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  instructor: string;
  duration: string;
  level: string;
  price: {
    usd: number;
    eur: number;
    aed: number;
  };
  image: string;
  rating: number;
  students: number;
  lessons: string[];
  requirements: string[];
  whatYouWillLearn: string[];
}

const mockCourse: Course = {
  id: '1',
  title: 'Basic Cake Making Fundamentals',
  description: 'Learn the essential techniques for creating perfect cakes from scratch',
  fullDescription: 'This comprehensive course will take you through all the fundamentals of cake making. You\'ll learn about different types of flour, how to properly measure ingredients, mixing techniques, and baking temperatures. By the end of this course, you\'ll be able to create delicious cakes with confidence.',
  instructor: 'Chef Sarah Johnson',
  duration: '4 hours',
  level: 'Beginner',
  price: { usd: 49, eur: 45, aed: 180 },
  image: '/api/placeholder/600/400',
  rating: 4.8,
  students: 1250,
  lessons: [
    'Introduction to Cake Making',
    'Understanding Ingredients',
    'Basic Mixing Techniques',
    'Baking Temperature and Timing',
    'Cooling and Storage',
    'Simple Decorating Techniques'
  ],
  requirements: [
    'Basic kitchen equipment',
    'Access to an oven',
    'Measuring cups and spoons',
    'Mixing bowls'
  ],
  whatYouWillLearn: [
    'Master basic cake making techniques',
    'Understand ingredient functions',
    'Learn proper mixing methods',
    'Perfect your baking timing',
    'Basic cake decoration skills'
  ]
};

export default function CoursePage() {
  const t = useTranslations('Course');
  const params = useParams();
  const [currency, setCurrency] = useState<'usd' | 'eur' | 'aed'>('usd');
  const [showPayment, setShowPayment] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const getCurrencySymbol = (curr: string) => {
    switch (curr) {
      case 'usd': return '$';
      case 'eur': return '€';
      case 'aed': return 'د.إ';
      default: return '$';
    }
  };

  const handleEnrollClick = () => {
    setShowPayment(true);
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real application, you would integrate with Stripe here
    alert(t('paymentSuccess'));
    setIsProcessing(false);
    setShowPayment(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-pink-600">DonnaTalia Courses</span>
              </Link>
              <div className="ml-6 flex space-x-8">
                <Link href="/courses" className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium">
                  {t('backToCourses')}
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as 'usd' | 'eur' | 'aed')}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm"
              >
                <option value="usd">USD ($)</option>
                <option value="eur">EUR (€)</option>
                <option value="aed">AED (د.إ)</option>
              </select>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="h-64 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-8xl">🎂</span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{mockCourse.title}</h1>
              <p className="text-lg text-gray-600 mb-4">{mockCourse.description}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <span className="mr-2">👩‍🍳</span>
                  {mockCourse.instructor}
                </div>
                <div className="flex items-center">
                  <span className="mr-2">⏰</span>
                  {mockCourse.duration}
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📊</span>
                  {mockCourse.level}
                </div>
                <div className="flex items-center">
                  <span className="mr-2">⭐</span>
                  {mockCourse.rating} ({mockCourse.students} {t('students')})
                </div>
              </div>
            </div>

            {/* Course Description */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('aboutCourse')}</h2>
              <p className="text-gray-700 leading-relaxed">{mockCourse.fullDescription}</p>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('whatYouWillLearn')}</h2>
              <ul className="space-y-2">
                {mockCourse.whatYouWillLearn.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Course Content */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('courseContent')}</h2>
              <div className="space-y-3">
                {mockCourse.lessons.map((lesson, index) => (
                  <div key={index} className="flex items-center p-3 border border-gray-200 rounded-lg">
                    <span className="bg-pink-100 text-pink-800 text-sm px-2 py-1 rounded mr-3">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{lesson}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('requirements')}</h2>
              <ul className="space-y-2">
                {mockCourse.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-400 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-pink-600 mb-2">
                  {getCurrencySymbol(currency)}{mockCourse.price[currency]}
                </div>
                <p className="text-gray-500">{t('oneTimePayment')}</p>
              </div>

              {!showPayment ? (
                <button
                  onClick={handleEnrollClick}
                  className="w-full bg-pink-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors mb-4"
                >
                  {t('enrollNow')}
                </button>
              ) : (
                <div className="space-y-4">
                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-gray-900 mb-3">{t('paymentDetails')}</h3>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder={t('cardNumber')}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder={t('expiryDate')}
                          className="border border-gray-300 rounded-md px-3 py-2"
                        />
                        <input
                          type="text"
                          placeholder={t('cvv')}
                          className="border border-gray-300 rounded-md px-3 py-2"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder={t('cardholderName')}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                      />
                    </div>
                  </div>
                  
                  <button
                    onClick={handlePayment}
                    disabled={isProcessing}
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50"
                  >
                    {isProcessing ? t('processing') : `${t('payNow')} ${getCurrencySymbol(currency)}${mockCourse.price[currency]}`}
                  </button>
                  
                  <button
                    onClick={() => setShowPayment(false)}
                    className="w-full text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {t('cancel')}
                  </button>
                </div>
              )}

              <div className="border-t pt-4 mt-4">
                <h3 className="font-semibold text-gray-900 mb-3">{t('thisIncludes')}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {t('lifetimeAccess')}
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {t('videoLessons')}
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {t('downloadableResources')}
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {t('certificateCompletion')}
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {t('aiSupport')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
}
