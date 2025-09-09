'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import AIChatbot from '@/components/AIChatbot';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function DashboardPage() {
  const t = useTranslations('Dashboard');

  const enrolledCourses = [
    {
      id: '1',
      title: 'Basic Cake Making Fundamentals',
      progress: 75,
      lastAccessed: '2 days ago',
      instructor: 'Chef Sarah Johnson',
      thumbnail: '🎂'
    },
    {
      id: '2',
      title: 'Chocolate Cake Specialization',
      progress: 30,
      lastAccessed: '1 week ago',
      instructor: 'Chef Lisa Chen',
      thumbnail: '🍫'
    }
  ];

  const completedCourses = [
    {
      id: '3',
      title: 'Introduction to Baking',
      completedDate: '2024-01-15',
      certificate: true,
      thumbnail: '🏆'
    }
  ];

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
                  {t('courses')}
                </Link>
                <Link href="/dashboard" className="text-pink-600 px-3 py-2 text-sm font-medium border-b-2 border-pink-600">
                  {t('dashboard')}
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 text-sm font-medium">U</span>
                </div>
                <span className="text-sm text-gray-700">User Name</span>
              </div>
              <button className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium">
                {t('logout')}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('welcomeBack')}</h1>
          <p className="text-lg text-gray-600">{t('continueLearning')}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 bg-pink-100 rounded-lg">
                <span className="text-2xl">📚</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{t('enrolledCourses')}</p>
                <p className="text-2xl font-bold text-gray-900">{enrolledCourses.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <span className="text-2xl">🏆</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{t('completedCourses')}</p>
                <p className="text-2xl font-bold text-gray-900">{completedCourses.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <span className="text-2xl">⏱️</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{t('studyTime')}</p>
                <p className="text-2xl font-bold text-gray-900">24h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Enrolled Courses */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{t('enrolledCourses')}</h2>
            <div className="space-y-4">
              {enrolledCourses.map((course) => (
                <div key={course.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{course.thumbnail}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">{course.instructor}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex-1 mr-4">
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>{t('progress')}</span>
                            <span>{course.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-pink-600 h-2 rounded-full" 
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <Link
                          href={`/courses/${course.id}`}
                          className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors text-sm font-medium"
                        >
                          {t('continue')}
                        </Link>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">{t('lastAccessed')}: {course.lastAccessed}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link
                href="/courses"
                className="text-pink-600 hover:text-pink-700 font-medium text-sm"
              >
                {t('browseMoreCourses')} →
              </Link>
            </div>
          </div>

          {/* Completed Courses */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{t('completedCourses')}</h2>
            <div className="space-y-4">
              {completedCourses.map((course) => (
                <div key={course.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{course.thumbnail}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">
                        {t('completedOn')}: {new Date(course.completedDate).toLocaleDateString()}
                      </p>
                      {course.certificate && (
                        <div className="flex items-center space-x-2">
                          <span className="text-green-600 text-sm">✓</span>
                          <span className="text-sm text-gray-600">{t('certificateEarned')}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {completedCourses.length === 0 && (
              <div className="text-center py-8">
                <div className="text-gray-400 text-4xl mb-2">📖</div>
                <p className="text-gray-500">{t('noCompletedCourses')}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
}
