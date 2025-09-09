'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import GoogleLoginButton from '@/components/GoogleLoginButton';
import FacebookLoginButton from '@/components/FacebookLoginButton';

export default function RegisterPage() {
  const t = useTranslations('Auth');
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSocialLoginSuccess = (user: any) => {
    console.log('Social registration successful:', user);
    setError('');
  };

  const handleSocialLoginError = (error: string) => {
    setError(error);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError(t('passwordsDontMatch'));
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // TODO: Implement actual registration
      console.log('Registration attempt with:', formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, redirect to login after successful registration
      router.push('/login');
    } catch (err) {
      setError(t('registrationError'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-dark-500/5"></div>
      
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher />
      </div>
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="text-center mb-8">
          <div className="mx-auto h-16 w-16 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <span className="text-white text-2xl">👤</span>
          </div>
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">
            {t('createYourAccount')}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {t('alreadyHaveAccount')}{' '}
            <Link href="/login" className="font-medium text-primary-500 hover:text-primary-600 transition-colors">
              {t('signIn')}
            </Link>
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-white/90 backdrop-blur-sm py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-white/20 hover-lift">
          {error && (
            <div className="mb-4 rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">{error}</h3>
                </div>
              </div>
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                {t('fullName')}
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {t('email')}
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                {t('password')}
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  minLength={8}
                  value={formData.password}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                {t('passwordRequirements')}
              </p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                {t('confirmPassword')}
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                {t('iAgreeTo')}{' '}
                <Link href="/terms-of-service" className="text-primary-500 hover:text-primary-600 transition-colors">
                  {t('termsOfService')}
                </Link>{' '}
                {t('and')}{' '}
                <Link href="/privacy-policy" className="text-primary-500 hover:text-primary-600 transition-colors">
                  {t('privacyPolicy')}
                </Link>
              </label>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white bg-gradient-to-r from-secondary-500 to-accent-500 hover:from-secondary-600 hover:to-accent-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500 disabled:opacity-50 transition-all duration-300 transform hover:scale-105"
              >
                {loading ? t('creatingAccount') : t('createAccount')}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">{t('orContinueWith')}</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <GoogleLoginButton 
                  onSuccess={handleSocialLoginSuccess}
                  onError={handleSocialLoginError}
                />
              </div>
              <div>
                <FacebookLoginButton 
                  onSuccess={handleSocialLoginSuccess}
                  onError={handleSocialLoginError}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
