'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import AIChatbot from '@/components/AIChatbot';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function AboutPage() {
  const t = useTranslations('About');
  const commonT = useTranslations('Home');

  const teamMembers = [
    {
      name: 'Donna Talia',
      role: t('founder'),
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      description: t('founderDescription')
    },
    {
      name: 'Chef Maria',
      role: t('headChef'),
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: t('headChefDescription')
    },
    {
      name: 'Chef Ahmed',
      role: t('pastryChef'),
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description: t('pastryChefDescription')
    }
  ];

  const stats = [
    { number: '10,000+', label: t('students') },
    { number: '50+', label: t('courses') },
    { number: '15+', label: t('countries') },
    { number: '98%', label: t('satisfaction') }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-primary-500">DonnaTalia Courses</span>
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link href="/courses" className="text-gray-700 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors">
                  {commonT('courses')}
                </Link>
                <Link href="/about" className="text-primary-500 px-3 py-2 text-sm font-medium border-b-2 border-primary-500">
                  {commonT('about')}
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <Link href="/login" className="text-gray-700 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors">
                {commonT('login')}
              </Link>
              <Link href="/register" className="bg-primary-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-600 transition-colors">
                {commonT('signup')}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-500 to-dark-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto py-20 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl animate-fade-in">
            {t('heroTitle')}
          </h1>
          <p className="mt-6 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl animate-fade-in-delay">
            {t('heroDescription')}
          </p>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">🎂</div>
        <div className="absolute top-20 right-20 text-4xl opacity-20 animate-float-delay">🍰</div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-20 animate-float-slow">🧁</div>
        <div className="absolute bottom-10 right-10 text-4xl opacity-20 animate-float">🍪</div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {t('ourStoryTitle')}
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                {t('ourStoryDescription')}
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-primary-500 text-white">
                      <span className="text-sm font-bold">1</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{t('milestone1Title')}</h3>
                    <p className="mt-1 text-base text-gray-500">{t('milestone1Description')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-primary-500 text-white">
                      <span className="text-sm font-bold">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{t('milestone2Title')}</h3>
                    <p className="mt-1 text-base text-gray-500">{t('milestone2Description')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-primary-500 text-white">
                      <span className="text-sm font-bold">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{t('milestone3Title')}</h3>
                    <p className="mt-1 text-base text-gray-500">{t('milestone3Description')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
                  alt="Cake making process"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{t('imageCaption')}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('statsTitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('statsDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto h-20 w-20 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                  <span className="text-2xl font-bold text-primary-500">{stat.number}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{stat.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('teamTitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('teamDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mx-auto h-48 w-48 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="mt-2 text-lg text-primary-500 font-medium">{member.role}</p>
                <p className="mt-4 text-base text-gray-500">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-gradient-to-r from-primary-500 to-dark-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            {t('missionTitle')}
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200">
            {t('missionDescription')}
          </p>
          <div className="mt-8">
            <Link href="/courses" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-500 bg-white hover:bg-gray-50 transition-colors">
              {t('startLearning')}
            </Link>
          </div>
        </div>
      </div>

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
}
