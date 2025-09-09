'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import AIChatbot from '@/components/AIChatbot';
import LanguageSwitcher from '@/components/LanguageSwitcher';

interface Course {
  id: string;
  title: string;
  description: string;
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
}

const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Basic Cake Making Fundamentals',
    description: 'Learn the essential techniques for creating perfect cakes from scratch',
    instructor: 'Chef Sarah Johnson',
    duration: '4 hours',
    level: 'Beginner',
    price: { usd: 49, eur: 45, aed: 180 },
    image: '/api/placeholder/400/300',
    rating: 4.8,
    students: 1250
  },
  {
    id: '2',
    title: 'Advanced Cake Decoration',
    description: 'Master professional cake decorating techniques and artistic designs',
    instructor: 'Chef Maria Rodriguez',
    duration: '6 hours',
    level: 'Advanced',
    price: { usd: 89, eur: 82, aed: 327 },
    image: '/api/placeholder/400/300',
    rating: 4.9,
    students: 890
  },
  {
    id: '3',
    title: 'Wedding Cake Masterclass',
    description: 'Create stunning multi-tier wedding cakes like a professional',
    instructor: 'Chef Ahmed Hassan',
    duration: '8 hours',
    level: 'Intermediate',
    price: { usd: 129, eur: 119, aed: 474 },
    image: '/api/placeholder/400/300',
    rating: 4.7,
    students: 567
  },
  {
    id: '4',
    title: 'Chocolate Cake Specialization',
    description: 'Everything about chocolate cakes - from ganache to tempering',
    instructor: 'Chef Lisa Chen',
    duration: '5 hours',
    level: 'Intermediate',
    price: { usd: 69, eur: 63, aed: 253 },
    image: '/api/placeholder/400/300',
    rating: 4.6,
    students: 743
  }
];

export default function CoursesPage() {
  const t = useTranslations('Courses');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [currency, setCurrency] = useState<'usd' | 'eur' | 'aed'>('usd');
  const [filteredCourses, setFilteredCourses] = useState(mockCourses);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterCourses(term, selectedLevel);
  };

  const handleLevelFilter = (level: string) => {
    setSelectedLevel(level);
    filterCourses(searchTerm, level);
  };

  const filterCourses = (term: string, level: string) => {
    let filtered = mockCourses;
    
    if (term) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(term.toLowerCase()) ||
        course.description.toLowerCase().includes(term.toLowerCase()) ||
        course.instructor.toLowerCase().includes(term.toLowerCase())
      );
    }
    
    if (level) {
      filtered = filtered.filter(course => course.level === level);
    }
    
    setFilteredCourses(filtered);
  };

  const getCurrencySymbol = (curr: string) => {
    switch (curr) {
      case 'usd': return '$';
      case 'eur': return '€';
      case 'aed': return 'د.إ';
      default: return '$';
    }
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
              <Link href="/login" className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium">
                {t('login')}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('allCourses')}</h1>
          <p className="text-lg text-gray-600">{t('coursesDescription')}</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('searchCourses')}
              </label>
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('filterByLevel')}
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => handleLevelFilter(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-pink-500 focus:border-pink-500"
              >
                <option value="">{t('allLevels')}</option>
                <option value="Beginner">{t('beginner')}</option>
                <option value="Intermediate">{t('intermediate')}</option>
                <option value="Advanced">{t('advanced')}</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedLevel('');
                  setFilteredCourses(mockCourses);
                }}
                className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                {t('clearFilters')}
              </button>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
                <span className="text-white text-6xl">🎂</span>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {course.title}
                  </h3>
                  <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full">
                    {course.level}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">👩‍🍳</span>
                    {course.instructor}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">⏰</span>
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">⭐</span>
                    {course.rating} ({course.students} {t('students')})
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-pink-600">
                    {getCurrencySymbol(currency)}{course.price[currency]}
                  </div>
                  <Link
                    href={`/courses/${course.id}`}
                    className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors text-sm font-medium"
                  >
                    {t('enrollNow')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{t('noCoursesFound')}</h3>
            <p className="text-gray-500">{t('tryDifferentSearch')}</p>
          </div>
        )}
      </div>
      
      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
}
