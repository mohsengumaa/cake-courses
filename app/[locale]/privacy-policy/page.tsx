'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function PrivacyPolicyPage() {
  const t = useTranslations('PrivacyPolicy');
  const commonT = useTranslations('Home');

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
                <Link href="/about" className="text-gray-700 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors">
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
            {t('title')}
          </h1>
          <p className="mt-6 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl animate-fade-in-delay">
            {t('subtitle')}
          </p>
          <p className="mt-4 text-sm text-gray-300">
            {t('lastUpdated')}: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('introduction')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('introductionText')}
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('informationWeCollect')}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('personalInformation')}</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>{t('personalInfo1')}</li>
                  <li>{t('personalInfo2')}</li>
                  <li>{t('personalInfo3')}</li>
                  <li>{t('personalInfo4')}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('usageInformation')}</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>{t('usageInfo1')}</li>
                  <li>{t('usageInfo2')}</li>
                  <li>{t('usageInfo3')}</li>
                  <li>{t('usageInfo4')}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('howWeUseInformation')}</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>{t('useInfo1')}</li>
              <li>{t('useInfo2')}</li>
              <li>{t('useInfo3')}</li>
              <li>{t('useInfo4')}</li>
              <li>{t('useInfo5')}</li>
              <li>{t('useInfo6')}</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('informationSharing')}</h2>
            <p className="text-gray-600 mb-4">{t('sharingText')}</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>{t('sharing1')}</li>
              <li>{t('sharing2')}</li>
              <li>{t('sharing3')}</li>
              <li>{t('sharing4')}</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('dataSecurity')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('securityText')}
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('cookies')}</h2>
            <p className="text-gray-600 mb-4">{t('cookiesText')}</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>{t('cookies1')}</li>
              <li>{t('cookies2')}</li>
              <li>{t('cookies3')}</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('yourRights')}</h2>
            <p className="text-gray-600 mb-4">{t('rightsText')}</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>{t('rights1')}</li>
              <li>{t('rights2')}</li>
              <li>{t('rights3')}</li>
              <li>{t('rights4')}</li>
              <li>{t('rights5')}</li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('childrensPrivacy')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('childrensText')}
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('changesToPolicy')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('changesText')}
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('contactInformation')}</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">{t('contactText')}</p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">{t('email')}:</span> privacy@donnatalia.com
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">{t('phone')}:</span> +1 (555) 123-4567
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">{t('address')}:</span> 123 Baker Street, Cake City, CC 12345
                </p>
              </div>
            </div>
          </section>

          {/* Back to Home */}
          <div className="text-center pt-8 border-t border-gray-200">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 transition-colors"
            >
              {t('backToHome')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
