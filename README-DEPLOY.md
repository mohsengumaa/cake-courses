# 🚀 تعليمات رفع مشروع DonnaTalia Courses على DreamHost

## 📋 المتطلبات المسبقة:
- حساب DreamHost مفعل
- Node.js 18+ مثبت على الخادم (إذا كان متوفراً)
- وصول إلى لوحة تحكم DreamHost

## 🔧 الخطوات التفصيلية:

### 1️⃣ إعداد المشروع محلياً:
```bash
# تأكد من أنك في مجلد المشروع
cd cake-courses

# بناء المشروع
npm run build

# تأكد من نجاح البناء
```

### 2️⃣ رفع الملفات على DreamHost:

#### الطريقة الأولى: عبر File Manager
1. **ادخل إلى لوحة تحكم DreamHost**
2. **اذهب إلى "Files" > "File Manager"**
3. **انتقل إلى مجلد `public_html` الخاص بموقعك**
4. **احذف جميع الملفات الموجودة (إذا لزم الأمر)**
5. **ارفع الملفات التالية:**
   - جميع الملفات من مجلد `.next/`
   - ملف `.htaccess`
   - ملف `package.json`
   - مجلد `node_modules/` (إذا كان Node.js متوفراً)

#### الطريقة الثانية: عبر FTP
1. **استخدم برنامج FTP مثل FileZilla**
2. **اتصل بخادم DreamHost:**
   - Host: your-domain.com
   - Username: your-username
   - Password: your-password
   - Port: 21
3. **انتقل إلى مجلد `public_html`**
4. **ارفع جميع الملفات المطلوبة**

### 3️⃣ إعداد Node.js (إذا كان متوفراً):

#### أ) تفعيل Node.js:
1. **اذهب إلى "Panel" > "Websites" > "Manage Websites"**
2. **اختر موقعك**
3. **اذهب إلى "Hosting" > "Node.js"**
4. **فعّل Node.js**
5. **اختر "Run Node.js app from a directory"**
6. **اختر مجلد المشروع**

#### ب) إعداد متغيرات البيئة:
1. **أضف متغيرات البيئة المطلوبة**
2. **تأكد من إعدادات قاعدة البيانات (إذا لزم الأمر)**

### 4️⃣ إعدادات إضافية:

#### ملف .htaccess:
```apache
RewriteEngine On

# Handle Next.js routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Set cache headers
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

### 5️⃣ اختبار الموقع:

#### أ) اختبار الصفحات:
- ✅ الصفحة الرئيسية: `https://your-domain.com`
- ✅ صفحة من نحن: `https://your-domain.com/about`
- ✅ صفحة الدورات: `https://your-domain.com/courses`
- ✅ صفحة تسجيل الدخول: `https://your-domain.com/login`
- ✅ صفحة التسجيل: `https://your-domain.com/register`

#### ب) اختبار اللغات:
- ✅ الإنجليزية: `https://your-domain.com/en`
- ✅ العربية: `https://your-domain.com/ar`
- ✅ التركية: `https://your-domain.com/tr`

#### ج) اختبار الميزات:
- ✅ التبديل بين اللغات
- ✅ المساعد الذكي
- ✅ الصور والفيديوهات
- ✅ معلومات التواصل
- ✅ المؤثرات البصرية

### 6️⃣ استكشاف الأخطاء:

#### مشاكل شائعة وحلولها:

**المشكلة: الموقع لا يعمل**
- تحقق من رفع جميع الملفات
- تأكد من وجود ملف `.htaccess`
- تحقق من صلاحيات الملفات (755 للمجلدات، 644 للملفات)

**المشكلة: الصور لا تظهر**
- تحقق من رفع مجلد `_next/static/`
- تأكد من إعدادات `next.config.js`

**المشكلة: التبديل بين اللغات لا يعمل**
- تحقق من رفع مجلد `messages/`
- تأكد من إعدادات `middleware.ts`

**المشكلة: المساعد الذكي لا يعمل**
- تحقق من رفع ملف `AIChatbot.tsx`
- تأكد من إعدادات JavaScript

### 7️⃣ نصائح مهمة:

#### أ) الأمان:
- تأكد من تحديث جميع التبعيات
- استخدم HTTPS
- فعّل جدار الحماية

#### ب) الأداء:
- فعّل ضغط الملفات
- استخدم CDN إذا كان متوفراً
- حسّن الصور

#### ج) الصيانة:
- احتفظ بنسخة احتياطية
- راقب ملفات السجل
- حدث التبعيات بانتظام

## 📞 الدعم:

إذا واجهت أي مشاكل:
1. تحقق من ملفات السجل في لوحة تحكم DreamHost
2. تأكد من إعدادات DNS
3. اتصل بدعم DreamHost إذا لزم الأمر

## 🎉 تهانينا!

بعد اتباع هذه الخطوات، سيكون موقع "DonnaTalia Courses" متاحاً على الإنترنت مع جميع الميزات:
- ✅ دعم 3 لغات
- ✅ صفحة من نحن
- ✅ معرض صور
- ✅ فيديوهات تعليمية
- ✅ معلومات التواصل
- ✅ مساعد ذكي
- ✅ مؤثرات بصرية متقدمة
