'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

interface FacebookLoginButtonProps {
  onSuccess?: (user: any) => void;
  onError?: (error: string) => void;
}

export default function FacebookLoginButton({ onSuccess, onError }: FacebookLoginButtonProps) {
  const t = useTranslations('Auth');
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleFacebookLogin = async () => {
    setLoading(true);
    
    try {
      // محاكاة تسجيل الدخول عبر فيسبوك
      console.log('Facebook login initiated');
      
      // محاكاة API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // بيانات مستخدم وهمية
      const mockUser = {
        id: 'facebook_789012',
        name: 'مستخدم فيسبوك',
        email: 'user@facebook.com',
        provider: 'facebook',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        isNewUser: true
      };
      
      // حفظ بيانات المستخدم في localStorage
      localStorage.setItem('user', JSON.stringify(mockUser));
      localStorage.setItem('authProvider', 'facebook');
      
      if (onSuccess) {
        onSuccess(mockUser);
      }
      
      // إعادة توجيه إلى لوحة التحكم
      router.push('/dashboard');
      
    } catch (error) {
      console.error('Facebook login error:', error);
      if (onError) {
        onError(t('facebookLoginError'));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleFacebookLogin}
      disabled={loading}
      className="w-full inline-flex justify-center items-center py-3 px-4 border border-gray-300 rounded-lg shadow-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? (
        <div className="flex items-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
                    {t('creatingAccount')}
        </div>
      ) : (
        <>
          <span className="sr-only">{t('signInWithFacebook')}</span>
          <svg className="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
              clipRule="evenodd"
            />
          </svg>
          {t('signUpWithFacebook')}
        </>
      )}
    </button>
  );
}
