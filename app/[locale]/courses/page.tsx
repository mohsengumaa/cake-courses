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
                <span className="text-xl font-bold text-primary-500">DonnaTalia Courses</span>
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
              <Link href="/login" className="text-gray-700 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors">
                {t('login')}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-dark-500/10 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-500 to-dark-500 bg-clip-text text-transparent mb-4 animate-fade-in">
              {t('allCourses')}
            </h1>
            <p className="text-lg text-gray-600 animate-fade-in-delay">{t('coursesDescription')}</p>
            <div className="mt-4 flex justify-center space-x-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-secondary-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-accent-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 hover-lift">
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
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:shadow-md"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('filterByLevel')}
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => handleLevelFilter(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:shadow-md"
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
                className="w-full bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:from-gray-300 hover:to-gray-400 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                {t('clearFilters')}
              </button>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <div 
              key={course.id} 
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-white/20 group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="h-48 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-dark-500/20"></div>
                <span className="text-white text-6xl relative z-10 group-hover:scale-125 transition-transform duration-300">🎂</span>
                <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <span className="text-white text-sm font-bold">NEW</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {course.title}
                  </h3>
                  <span className="bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-800 text-xs px-3 py-1 rounded-full font-semibold shadow-sm">
                    {course.level}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-lg p-2 hover:bg-primary-50 transition-colors">
                    <span className="mr-2 text-primary-500">👩‍🍳</span>
                    <span className="font-medium">{course.instructor}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-lg p-2 hover:bg-secondary-50 transition-colors">
                    <span className="mr-2 text-secondary-500">⏰</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-lg p-2 hover:bg-accent-50 transition-colors">
                    <span className="mr-2 text-accent-500">⭐</span>
                    <span className="font-medium">{course.rating} ({course.students} {t('students')})</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-dark-500 bg-clip-text text-transparent">
                    {getCurrencySymbol(currency)}{course.price[currency]}
                  </div>
                  <Link
                    href={`/courses/${course.id}`}
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    {t('enrollNow')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-dark-500/5 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <div className="text-6xl mb-4 animate-bounce">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('noCoursesFound')}</h3>
              <p className="text-gray-600">{t('tryDifferentSearch')}</p>
              <div className="mt-4 flex justify-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
}
