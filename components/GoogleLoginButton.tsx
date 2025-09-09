'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

interface GoogleLoginButtonProps {
  onSuccess?: (user: any) => void;
  onError?: (error: string) => void;
}

export default function GoogleLoginButton({ onSuccess, onError }: GoogleLoginButtonProps) {
  const t = useTranslations('Auth');
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    
    try {
      // محاكاة تسجيل الدخول عبر جوجل
      console.log('Google login initiated');
      
      // محاكاة API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // بيانات مستخدم وهمية
      const mockUser = {
        id: 'google_123456',
        name: 'مستخدم جوجل',
        email: 'user@gmail.com',
        provider: 'google',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        isNewUser: true
      };
      
      // حفظ بيانات المستخدم في localStorage
      localStorage.setItem('user', JSON.stringify(mockUser));
      localStorage.setItem('authProvider', 'google');
      
      if (onSuccess) {
        onSuccess(mockUser);
      }
      
      // إعادة توجيه إلى لوحة التحكم
      router.push('/dashboard');
      
    } catch (error) {
      console.error('Google login error:', error);
      if (onError) {
        onError(t('googleLoginError'));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleLogin}
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
          <span className="sr-only">{t('signInWithGoogle')}</span>
          <svg className="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
          </svg>
          {t('signUpWithGoogle')}
        </>
      )}
    </button>
  );
}
