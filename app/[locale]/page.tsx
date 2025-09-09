import { useTranslations } from 'next-intl';
import Link from 'next/link';
import AIChatbot from '@/components/AIChatbot';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Image from 'next/image';

export default function Home() {
  const t = useTranslations('Home');
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-primary-500">DonnaTalia Courses</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/courses" className="text-gray-700 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors">
                {t('courses')}
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors">
                {t('about')}
              </Link>
              <LanguageSwitcher />
              <Link href="/login" className="text-gray-700 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors">
                {t('login')}
              </Link>
              <Link href="/register" className="bg-primary-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-600 transition-colors">
                {t('signup')}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <div className="relative bg-gradient-to-r from-primary-500 to-dark-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto py-20 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl animate-fade-in">
            <span className="block">{t('heroTitle')}</span>
            <span className="block text-secondary-500">{t('heroSubtitle')}</span>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl animate-fade-in-delay">
            {t('heroDescription')}
          </p>
          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
            <div className="rounded-md shadow-lg transform hover:scale-105 transition-transform">
              <Link href="/courses" className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 md:py-4 md:text-lg md:px-10 transition-colors">
                {t('browseCourses')}
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">🎂</div>
        <div className="absolute top-20 right-20 text-4xl opacity-20 animate-float-delay">🍰</div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-20 animate-float-slow">🧁</div>
        <div className="absolute bottom-10 right-10 text-4xl opacity-20 animate-float">🍪</div>
      </div>

      {/* Gallery Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('galleryTitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('galleryDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=400&fit=crop",
                alt: "Beautiful Wedding Cake",
                title: "Wedding Cakes"
              },
              {
                src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&h=400&fit=crop",
                alt: "Chocolate Cake",
                title: "Chocolate Delights"
              },
              {
                src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=400&fit=crop",
                alt: "Cupcakes",
                title: "Cupcakes"
              },
              {
                src: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=500&h=400&fit=crop",
                alt: "Birthday Cake",
                title: "Birthday Cakes"
              },
              {
                src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&h=400&fit=crop",
                alt: "Cake Decorating",
                title: "Cake Decorating"
              },
              {
                src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&h=400&fit=crop",
                alt: "Cake Making Process",
                title: "Making Process"
              }
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-4 aspect-h-3">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('videoTitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('videoDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Cake Making Tutorial"
                  className="w-full h-64"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🎥 {t('video1Title')}</h3>
                <p className="text-gray-600">{t('video1Description')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🎬 {t('video2Title')}</h3>
                <p className="text-gray-600">{t('video2Description')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">📺 {t('video3Title')}</h3>
                <p className="text-gray-600">{t('video3Description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-500 font-semibold tracking-wide uppercase">{t('featuresTitle')}</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {t('featuresSubtitle')}
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {[
                {
                  name: t('feature1Title'),
                  description: t('feature1Description'),
                  icon: '🎂',
                },
                {
                  name: t('feature2Title'),
                  description: t('feature2Description'),
                  icon: '👩‍🍳',
                },
                {
                  name: t('feature3Title'),
                  description: t('feature3Description'),
                  icon: '💬',
                },
              ].map((feature, index) => (
                <div key={feature.name} className="relative group">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white group-hover:bg-primary-600 transition-colors">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gradient-to-r from-primary-500 to-dark-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              {t('contactTitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              {t('contactDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="mx-auto h-16 w-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{t('email')}</h3>
              <p className="mt-2 text-gray-200">info@cakemastery.com</p>
            </div>
            
            <div className="text-center group">
              <div className="mx-auto h-16 w-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{t('phone')}</h3>
              <p className="mt-2 text-gray-200">+1 (555) 123-4567</p>
            </div>
            
            <div className="text-center group">
              <div className="mx-auto h-16 w-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{t('address')}</h3>
              <p className="mt-2 text-gray-200">123 Baker Street, Sweet City</p>
            </div>
            
            <div className="text-center group">
              <div className="mx-auto h-16 w-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <span className="text-2xl">🕒</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{t('hours')}</h3>
              <p className="mt-2 text-gray-200">Mon-Fri: 9AM-6PM</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-white hover:text-secondary-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-secondary-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-secondary-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-secondary-500 transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
}
