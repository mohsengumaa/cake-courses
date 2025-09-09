'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

interface PaymentSystemProps {
  courseId: string;
  courseTitle: string;
  price: {
    usd: number;
    eur: number;
    aed: number;
  };
  onPaymentSuccess?: (paymentData: any) => void;
  onPaymentError?: (error: string) => void;
}

export default function PaymentSystem({ 
  courseId, 
  courseTitle, 
  price, 
  onPaymentSuccess, 
  onPaymentError 
}: PaymentSystemProps) {
  const t = useTranslations('Payment');
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'apple' | 'google'>('card');
  const [currency, setCurrency] = useState<'usd' | 'eur' | 'aed'>('usd');
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: '',
    email: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    
    try {
      // محاكاة عملية الدفع
      console.log('Processing payment for course:', courseId);
      console.log('Payment method:', paymentMethod);
      console.log('Amount:', price[currency], currency.toUpperCase());
      
      // محاكاة API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // بيانات الدفع الوهمية
      const paymentData = {
        id: `pay_${Date.now()}`,
        courseId,
        courseTitle,
        amount: price[currency],
        currency: currency.toUpperCase(),
        method: paymentMethod,
        status: 'completed',
        timestamp: new Date().toISOString(),
        transactionId: `txn_${Math.random().toString(36).substr(2, 9)}`
      };
      
      // حفظ بيانات الدفع في localStorage
      const existingPayments = JSON.parse(localStorage.getItem('payments') || '[]');
      existingPayments.push(paymentData);
      localStorage.setItem('payments', JSON.stringify(existingPayments));
      
      // حفظ الدورة في قائمة الدورات المشتراة
      const purchasedCourses = JSON.parse(localStorage.getItem('purchasedCourses') || '[]');
      if (!purchasedCourses.includes(courseId)) {
        purchasedCourses.push(courseId);
        localStorage.setItem('purchasedCourses', JSON.stringify(purchasedCourses));
      }
      
      setShowSuccess(true);
      
      if (onPaymentSuccess) {
        onPaymentSuccess(paymentData);
      }
      
      // إعادة توجيه إلى لوحة التحكم بعد 3 ثوان
      setTimeout(() => {
        router.push('/dashboard');
      }, 3000);
      
    } catch (error) {
      console.error('Payment error:', error);
      if (onPaymentError) {
        onPaymentError(t('paymentError'));
      }
    } finally {
      setLoading(false);
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  if (showSuccess) {
    return (
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-green-600 mb-4">{t('paymentSuccess')}</h3>
          <p className="text-gray-600 mb-6">{t('paymentSuccessMessage')}</p>
          <div className="bg-green-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-green-800">
              {t('redirectingToDashboard')}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{t('paymentDetails')}</h3>
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg">
          <div>
            <p className="font-medium text-gray-900">{courseTitle}</p>
            <p className="text-sm text-gray-600">{t('courseAccess')}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary-600">
              {price[currency]} {currency.toUpperCase()}
            </p>
          </div>
        </div>
      </div>

      {/* Currency Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">{t('selectCurrency')}</label>
        <div className="grid grid-cols-3 gap-3">
          {Object.entries(price).map(([curr, amount]) => (
            <button
              key={curr}
              onClick={() => setCurrency(curr as 'usd' | 'eur' | 'aed')}
              className={`p-3 rounded-lg border-2 transition-all ${
                currency === curr
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="font-medium">{curr.toUpperCase()}</div>
              <div className="text-sm">{amount}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">{t('paymentMethod')}</label>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setPaymentMethod('card')}
            className={`p-4 rounded-lg border-2 transition-all ${
              paymentMethod === 'card'
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
              </svg>
              <span className="font-medium">{t('creditCard')}</span>
            </div>
          </button>
          <button
            onClick={() => setPaymentMethod('paypal')}
            className={`p-4 rounded-lg border-2 transition-all ${
              paymentMethod === 'paypal'
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.105-.633c-.365-1.882-1.46-3.2-3.38-3.2H9.89c-.524 0-.968.382-1.05.9L7.72 19.337h4.64c.524 0 .968-.382 1.05-.9l1.12-7.106h2.19c2.57 0 4.578-.543 5.69-1.81 1.01-1.15 1.304-2.42 1.012-4.287z"/>
              </svg>
              <span className="font-medium">PayPal</span>
            </div>
          </button>
        </div>
      </div>

      {/* Card Details */}
      {paymentMethod === 'card' && (
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('cardNumber')}</label>
            <input
              type="text"
              value={cardData.number}
              onChange={(e) => setCardData({...cardData, number: formatCardNumber(e.target.value)})}
              placeholder="1234 5678 9012 3456"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-primary-500 focus:border-primary-500"
              maxLength={19}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('expiryDate')}</label>
              <input
                type="text"
                value={cardData.expiry}
                onChange={(e) => setCardData({...cardData, expiry: formatExpiry(e.target.value)})}
                placeholder="MM/YY"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-primary-500 focus:border-primary-500"
                maxLength={5}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('cvv')}</label>
              <input
                type="text"
                value={cardData.cvv}
                onChange={(e) => setCardData({...cardData, cvv: e.target.value.replace(/\D/g, '')})}
                placeholder="123"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-primary-500 focus:border-primary-500"
                maxLength={4}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('cardholderName')}</label>
            <input
              type="text"
              value={cardData.name}
              onChange={(e) => setCardData({...cardData, name: e.target.value})}
              placeholder={t('cardholderNamePlaceholder')}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('email')}</label>
            <input
              type="email"
              value={cardData.email}
              onChange={(e) => setCardData({...cardData, email: e.target.value})}
              placeholder={t('emailPlaceholder')}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>
      )}

      {/* Payment Button */}
      <button
        onClick={handlePayment}
        disabled={loading || (paymentMethod === 'card' && (!cardData.number || !cardData.expiry || !cardData.cvv || !cardData.name || !cardData.email))}
        className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {t('processing')}
          </div>
        ) : (
          `${t('payNow')} ${price[currency]} ${currency.toUpperCase()}`
        )}
      </button>

      {/* Security Notice */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500 flex items-center justify-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
          </svg>
          {t('securePayment')}
        </p>
      </div>
    </div>
  );
}
