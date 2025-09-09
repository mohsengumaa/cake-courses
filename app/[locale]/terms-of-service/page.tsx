'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function TermsOfServicePage() {
  const t = useTranslations('TermsOfService');
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
      <div className="relative bg-gradient-to-r from-secondary-500 to-accent-500 overflow-hidden">
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

          {/* Acceptance of Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('acceptanceOfTerms')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('acceptanceText')}
            </p>
          </section>

          {/* Description of Service */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('descriptionOfService')}</h2>
            <p className="text-gray-600 mb-4">{t('serviceDescription')}</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>{t('service1')}</li>
              <li>{t('service2')}</li>
              <li>{t('service3')}</li>
              <li>{t('service4')}</li>
              <li>{t('service5')}</li>
            </ul>
          </section>

          {/* User Accounts */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('userAccounts')}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('accountCreation')}</h3>
                <p className="text-gray-600">{t('accountCreationText')}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('accountSecurity')}</h3>
                <p className="text-gray-600">{t('accountSecurityText')}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('accountTermination')}</h3>
                <p className="text-gray-600">{t('accountTerminationText')}</p>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('paymentTerms')}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('pricing')}</h3>
                <p className="text-gray-600">{t('pricingText')}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('paymentMethods')}</h3>
                <p className="text-gray-600">{t('paymentMethodsText')}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('refunds')}</h3>
                <p className="text-gray-600">{t('refundsText')}</p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('intellectualProperty')}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('ourContent')}</h3>
                <p className="text-gray-600">{t('ourContentText')}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('userContent')}</h3>
                <p className="text-gray-600">{t('userContentText')}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('license')}</h3>
                <p className="text-gray-600">{t('licenseText')}</p>
              </div>
            </div>
          </section>

          {/* Prohibited Uses */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('prohibitedUses')}</h2>
            <p className="text-gray-600 mb-4">{t('prohibitedText')}</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>{t('prohibited1')}</li>
              <li>{t('prohibited2')}</li>
              <li>{t('prohibited3')}</li>
              <li>{t('prohibited4')}</li>
              <li>{t('prohibited5')}</li>
              <li>{t('prohibited6')}</li>
            </ul>
          </section>

          {/* Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('privacyText')}
            </p>
          </section>

          {/* Disclaimers */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('disclaimers')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('disclaimersText')}
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('limitationOfLiability')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('liabilityText')}
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('governingLaw')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('governingLawText')}
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('changesToTerms')}</h2>
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
                  <span className="font-semibold">{t('email')}:</span> legal@donnatalia.com
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
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary-500 hover:bg-secondary-600 transition-colors"
            >
              {t('backToHome')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
