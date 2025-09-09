# DonnaTalia Courses - Multi-Language E-Learning Platform

A comprehensive e-learning platform for cake making courses with multi-language support, multi-currency payments, and AI-powered student assistance.

## Features

- 🌍 **Multi-Language Support**: Arabic, English, and Turkish
- 💰 **Multi-Currency Payments**: USD, EUR, AED (Emirati Dirham)
- 🤖 **AI Chatbot**: 24/7 intelligent support for students
- 🎂 **Course Management**: Browse, search, and enroll in cake making courses
- 🔐 **User Authentication**: Secure login and registration system
- 📱 **Responsive Design**: Works on all devices
- 🎨 **Modern UI**: Beautiful, intuitive interface with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Authentication**: NextAuth.js (ready for integration)
- **Payments**: Stripe integration (ready for setup)
- **AI Assistant**: Custom chatbot with multi-language responses

## Project Structure

```
cake-courses/
├── app/
│   ├── [locale]/
│   │   ├── courses/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx      # Individual course page
│   │   │   └── page.tsx          # Courses listing page
│   │   ├── login/
│   │   │   └── page.tsx          # Login page
│   │   ├── register/
│   │   │   └── page.tsx          # Registration page
│   │   ├── layout.tsx            # Locale-specific layout
│   │   └── page.tsx              # Home page
│   └── globals.css               # Global styles
├── components/
│   └── AIChatbot.tsx            # AI assistant component
├── messages/
│   ├── en.json                  # English translations
│   ├── ar.json                  # Arabic translations
│   └── tr.json                  # Turkish translations
├── middleware.ts                # Internationalization middleware
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── package.json                # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Setup

Create a `.env.local` file with the following variables:

```env
# Stripe Configuration (for payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# NextAuth Configuration (for authentication)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Database (if using)
DATABASE_URL=your_database_url
```

## Features Overview

### Multi-Language Support
- Automatic locale detection
- RTL support for Arabic
- Seamless language switching
- Localized URLs (`/en`, `/ar`, `/tr`)

### Course Management
- Course browsing with search and filters
- Level-based filtering (Beginner, Intermediate, Advanced)
- Detailed course pages with curriculum
- Multi-currency pricing display

### Payment System
- Stripe integration ready
- Support for USD, EUR, and AED
- Secure payment processing
- One-time course purchases

### AI Chatbot
- Context-aware responses
- Multi-language support
- Cake making expertise
- 24/7 availability
- Floating chat widget

### User Authentication
- Secure login/registration
- Social login options (Google, Facebook)
- Password reset functionality
- Protected course access

## Customization

### Adding New Languages
1. Add locale to `next.config.js`
2. Create translation file in `messages/`
3. Update middleware configuration

### Adding New Courses
Modify the course data in the respective page components or integrate with a CMS/database.

### Styling
The project uses Tailwind CSS. Customize the design by:
- Modifying `tailwind.config.js`
- Updating component styles
- Adding custom CSS in `globals.css`

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Configure environment variables
4. Deploy

### Other Platforms
The application can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact our team or use the AI chatbot integrated into the platform.
