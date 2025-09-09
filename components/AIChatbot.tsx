'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const predefinedResponses = {
  en: {
    greeting: "Hello! I'm your AI baking assistant. How can I help you with cake making today?",
    ingredients: "For basic cake making, you'll need flour, sugar, eggs, butter, baking powder, and milk. The exact measurements depend on your recipe.",
    temperature: "Most cakes bake at 350°F (175°C). Always preheat your oven for at least 15 minutes before baking.",
    mixing: "Mix dry ingredients separately, then combine wet ingredients. Gradually fold wet into dry ingredients until just combined - don't overmix!",
    troubleshooting: "Common issues: Cake sinking (oven too hot/cold), dry cake (overbaked), dense cake (overmixed). What specific problem are you having?",
    decoration: "Start with a completely cooled cake. Use buttercream or fondant for decoration. Practice piping techniques on parchment paper first!",
    storage: "Store unfrosted cakes wrapped in plastic wrap for up to 3 days. Frosted cakes should be refrigerated and consumed within 5 days.",
    default: "I'm here to help with all your cake making questions! Ask me about ingredients, techniques, troubleshooting, or decorating tips."
  },
  ar: {
    greeting: "مرحباً! أنا مساعدك الذكي للخبز. كيف يمكنني مساعدتك في صنع الكيك اليوم؟",
    ingredients: "لصنع الكيك الأساسي، ستحتاج إلى دقيق، سكر، بيض، زبدة، بيكنج باودر، وحليب. الكميات الدقيقة تعتمد على وصفتك.",
    temperature: "معظم أنواع الكيك تُخبز على درجة 175 مئوية (350 فهرنهايت). سخن الفرن مسبقاً لمدة 15 دقيقة على الأقل.",
    mixing: "اخلط المكونات الجافة منفصلة، ثم اجمع المكونات السائلة. أضف السائلة للجافة تدريجياً حتى تمتزج - لا تفرط في الخلط!",
    troubleshooting: "المشاكل الشائعة: غرق الكيك (فرن حار/بارد جداً)، كيك جاف (خبز زائد)، كيك كثيف (خلط زائد). ما المشكلة المحددة التي تواجهها؟",
    decoration: "ابدأ بكيك بارد تماماً. استخدم كريمة الزبدة أو الفوندان للتزيين. تدرب على تقنيات التزيين على ورق الخبز أولاً!",
    storage: "احفظ الكيك غير المزين ملفوفاً بالبلاستيك لمدة 3 أيام. الكيك المزين يجب حفظه في الثلاجة واستهلاكه خلال 5 أيام.",
    default: "أنا هنا لمساعدتك في جميع أسئلة صنع الكيك! اسألني عن المكونات، التقنيات، حل المشاكل، أو نصائح التزيين."
  },
  tr: {
    greeting: "Merhaba! Ben sizin yapay zeka pasta asistanınızım. Bugün pasta yapımında size nasıl yardımcı olabilirim?",
    ingredients: "Temel pasta yapımı için un, şeker, yumurta, tereyağı, kabartma tozu ve süt gerekir. Tam ölçüler tarifinize bağlıdır.",
    temperature: "Çoğu pasta 175°C'de (350°F) pişer. Pişirmeden önce fırını en az 15 dakika önceden ısıtın.",
    mixing: "Kuru malzemeleri ayrı karıştırın, sonra ıslak malzemeleri birleştirin. Islak malzemeleri kuru malzemelere yavaşça ekleyin - fazla karıştırmayın!",
    troubleshooting: "Yaygın sorunlar: Pasta çökmesi (fırın çok sıcak/soğuk), kuru pasta (fazla pişmiş), yoğun pasta (fazla karıştırılmış). Hangi sorunu yaşıyorsunuz?",
    decoration: "Tamamen soğumuş pasta ile başlayın. Dekorasyon için tereyağı kreması veya fondant kullanın. Süsleme tekniklerini önce pişirme kağıdında pratik yapın!",
    storage: "Süslenmemiş pastaları plastik sargıya sararak 3 güne kadar saklayın. Süslenmiş pastalar buzdolabında saklanmalı ve 5 gün içinde tüketilmelidir.",
    default: "Tüm pasta yapım sorularınızda yardımcı olmak için buradayım! Malzemeler, teknikler, sorun giderme veya süsleme ipuçları hakkında sorabilirsiniz."
  }
};

export default function AIChatbot() {
  const t = useTranslations('Chatbot');
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const getLocale = () => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.includes('/ar')) return 'ar';
      if (path.includes('/tr')) return 'tr';
    }
    return 'en';
  };

  const generateResponse = (userMessage: string): string => {
    const locale = getLocale();
    const responses = predefinedResponses[locale as keyof typeof predefinedResponses];
    const message = userMessage.toLowerCase();

    if (message.includes('hello') || message.includes('hi') || message.includes('مرحبا') || message.includes('merhaba')) {
      return responses.greeting;
    }
    if (message.includes('ingredient') || message.includes('مكونات') || message.includes('malzeme')) {
      return responses.ingredients;
    }
    if (message.includes('temperature') || message.includes('oven') || message.includes('درجة') || message.includes('فرن') || message.includes('sıcaklık') || message.includes('fırın')) {
      return responses.temperature;
    }
    if (message.includes('mix') || message.includes('خلط') || message.includes('karıştır')) {
      return responses.mixing;
    }
    if (message.includes('problem') || message.includes('issue') || message.includes('مشكلة') || message.includes('sorun')) {
      return responses.troubleshooting;
    }
    if (message.includes('decor') || message.includes('frost') || message.includes('تزيين') || message.includes('süsleme')) {
      return responses.decoration;
    }
    if (message.includes('store') || message.includes('keep') || message.includes('حفظ') || message.includes('sakla')) {
      return responses.storage;
    }
    
    return responses.default;
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const initializeChat = () => {
    if (messages.length === 0) {
      const locale = getLocale();
      const responses = predefinedResponses[locale as keyof typeof predefinedResponses];
      const welcomeMessage: Message = {
        id: 'welcome',
        text: responses.greeting,
        isBot: true,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
    setIsOpen(true);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={initializeChat}
          className="fixed bottom-6 right-6 bg-primary-500 text-white p-4 rounded-full shadow-lg hover:bg-primary-600 transition-colors z-50"
          aria-label={t('openChat')}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="bg-primary-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center mr-2">
                🤖
              </div>
              <div>
                <h3 className="font-semibold text-sm">{t('aiAssistant')}</h3>
                <p className="text-xs opacity-90">{t('onlineNow')}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-pink-700 p-1 rounded"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-primary-500 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t('typeMessage')}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="bg-primary-500 text-white p-2 rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
