'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import AIChatbot from '@/components/AIChatbot';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import PaymentSystem from '@/components/PaymentSystem';


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
  const [isPurchased, setIsPurchased] = useState(false);

  // التحقق من حالة الشراء
  useState(() => {
    const purchasedCourses = JSON.parse(localStorage.getItem('purchasedCourses') || '[]');
    setIsPurchased(purchasedCourses.includes(params.id));
  }, [params.id]);

  const getCurrencySymbol = (curr: string) => {
    switch (curr) {
      case 'usd': return '$';
      case 'eur': return '€';
      case 'aed': return 'د.إ';
      default: return '$';
    }
  };

  const handlePaymentSuccess = (paymentData: any) => {
    console.log('Payment successful:', paymentData);
    setIsPurchased(true);
    setShowPayment(false);
  };

  const handlePaymentError = (error: string) => {
    console.error('Payment error:', error);
    setIsProcessing(false);
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
                <span className="text-xl font-bold text-primary-500">DonnaTalia Courses</span>
              </Link>
              <div className="ml-6 flex space-x-8">
                <Link href="/courses" className="text-gray-700 hover:text-primary-500 px-3 py-2 text-sm font-medium">
                  {t('backToCourses')}
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as 'usd' | 'eur' | 'aed')}
                className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
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
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-6 border border-white/20 hover-lift">
              <div className="h-64 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-dark-500/20"></div>
                <span className="text-white text-8xl relative z-10 group-hover:scale-110 transition-transform duration-500">🎂</span>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <span className="text-white text-sm font-bold">POPULAR</span>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-500 to-dark-500 bg-clip-text text-transparent mb-4 animate-fade-in">
                {mockCourse.title}
              </h1>
              <p className="text-lg text-gray-600 mb-4 animate-fade-in-delay">{mockCourse.description}</p>
              
              <div className="flex flex-wrap gap-4 text-sm mb-4">
                <div className="flex items-center bg-primary-50 rounded-lg p-2 hover:bg-primary-100 transition-colors">
                  <span className="mr-2 text-primary-500">👩‍🍳</span>
                  <span className="text-gray-700 font-medium">{mockCourse.instructor}</span>
                </div>
                <div className="flex items-center bg-secondary-50 rounded-lg p-2 hover:bg-secondary-100 transition-colors">
                  <span className="mr-2 text-secondary-500">⏰</span>
                  <span className="text-gray-700 font-medium">{mockCourse.duration}</span>
                </div>
                <div className="flex items-center bg-accent-50 rounded-lg p-2 hover:bg-accent-100 transition-colors">
                  <span className="mr-2 text-accent-500">📊</span>
                  <span className="text-gray-700 font-medium">{mockCourse.level}</span>
                </div>
                <div className="flex items-center bg-dark-50 rounded-lg p-2 hover:bg-dark-100 transition-colors">
                  <span className="mr-2 text-dark-500">⭐</span>
                  <span className="text-gray-700 font-medium">{mockCourse.rating} ({mockCourse.students} {t('students')})</span>
                </div>
              </div>
            </div>

            {/* Course Description */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-6 border border-white/20 hover-lift">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-4">
                {t('aboutCourse')}
              </h2>
              <p className="text-gray-700 leading-relaxed">{mockCourse.fullDescription}</p>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-6 border border-white/20 hover-lift">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent mb-4">
                {t('whatYouWillLearn')}
              </h2>
              <ul className="space-y-3">
                {mockCourse.whatYouWillLearn.map((item, index) => (
                  <li key={index} className="flex items-start bg-gray-50 rounded-lg p-3 hover:bg-primary-50 transition-colors">
                    <span className="text-primary-500 mr-3 mt-1 text-lg">✓</span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Course Content */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-6 border border-white/20 hover-lift">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-accent-500 to-dark-500 bg-clip-text text-transparent mb-4">
                {t('courseContent')}
              </h2>
              <div className="space-y-3">
                {mockCourse.lessons.map((lesson, index) => (
                  <div key={index} className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 group">
                    <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm px-3 py-1 rounded-full mr-4 font-semibold shadow-md">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 font-medium group-hover:text-primary-700 transition-colors">{lesson}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 hover-lift">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-dark-500 to-primary-500 bg-clip-text text-transparent mb-4">
                {t('requirements')}
              </h2>
              <ul className="space-y-3">
                {mockCourse.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start bg-gray-50 rounded-lg p-3 hover:bg-secondary-50 transition-colors">
                    <span className="text-secondary-500 mr-3 mt-1 text-lg">•</span>
                    <span className="text-gray-700 font-medium">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 sticky top-8 border border-white/20 hover-lift">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-500 to-dark-500 bg-clip-text text-transparent mb-2">
                  {getCurrencySymbol(currency)}{mockCourse.price[currency]}
                </div>
                <p className="text-gray-500">{t('oneTimePayment')}</p>
              </div>

              {!showPayment ? (
                <button
                  onClick={handleEnrollClick}
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 mb-4 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {t('enrollNow')}
                </button>
              ) : (
                <PaymentSystem
                  courseId={params.id as string}
                  courseTitle={mockCourse.title}
                  price={mockCourse.price}
                  onPaymentSuccess={handlePaymentSuccess}
                  onPaymentError={handlePaymentError}
                />
              )}

              <div className="border-t pt-4 mt-4">
                <h3 className="font-semibold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-3">
                  {t('thisIncludes')}
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center bg-gray-50 rounded-lg p-2 hover:bg-primary-50 transition-colors">
                    <span className="text-primary-500 mr-3">✓</span>
                    <span className="text-gray-700 font-medium">{t('lifetimeAccess')}</span>
                  </li>
                  <li className="flex items-center bg-gray-50 rounded-lg p-2 hover:bg-secondary-50 transition-colors">
                    <span className="text-secondary-500 mr-3">✓</span>
                    <span className="text-gray-700 font-medium">{t('videoLessons')}</span>
                  </li>
                  <li className="flex items-center bg-gray-50 rounded-lg p-2 hover:bg-accent-50 transition-colors">
                    <span className="text-accent-500 mr-3">✓</span>
                    <span className="text-gray-700 font-medium">{t('downloadableResources')}</span>
                  </li>
                  <li className="flex items-center bg-gray-50 rounded-lg p-2 hover:bg-dark-50 transition-colors">
                    <span className="text-dark-500 mr-3">✓</span>
                    <span className="text-gray-700 font-medium">{t('certificateCompletion')}</span>
                  </li>
                  <li className="flex items-center bg-gray-50 rounded-lg p-2 hover:bg-primary-50 transition-colors">
                    <span className="text-primary-500 mr-3">✓</span>
                    <span className="text-gray-700 font-medium">{t('aiSupport')}</span>
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
