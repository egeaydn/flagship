<div align="center">

# 🚀 Flagship

### Production-Ready Feature Flag Management Platform

*The Open-Source Alternative to LaunchDarkly*

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-12.0-orange?style=flat&logo=firebase)](https://firebase.google.com/)
[![Tests](https://img.shields.io/badge/Tests-41%20Passing-success?style=flat&logo=vitest)](https://vitest.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat)](LICENSE)

[Live Demo](https://flagship-dashboard.vercel.app) • [Documentation](./docs) • [API Reference](./docs/API.md) • [SDK Guide](./docs/SDK.md)

</div>

---

## 🎯 Overview

**Flagship** is a modern, production-ready feature flag management platform built with Next.js, TypeScript, and Firebase. It provides developers with powerful tools to control feature rollouts, A/B testing, and gradual deployments without code changes.

### ✨ Why Flagship?

- 🎛️ **Advanced Targeting** - Target users by attributes with 8+ operators (equals, contains, greater than, etc.)
- 📊 **Real-time Analytics** - Track flag evaluations with beautiful charts and insights
- 🔍 **Audit Logs** - Complete audit trail of all flag changes
- 🚀 **Fast API** - Edge-optimized API with 60s cache and <50ms response times
- 🛡️ **Type-safe SDK** - React SDK with TypeScript support and auto-completion
- 🧪 **Testing First** - 41 tests (31 unit/integration + 10 E2E) with 100% core coverage
- 🔄 **CI/CD Ready** - GitHub Actions + Vercel auto-deployment

---

## 🎬 Quick Start

### Prerequisites

- Node.js 20+ (LTS recommended)
- npm or pnpm
- Firebase account (free tier works)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/flagship.git
cd flagship

# Install dependencies
npm install --legacy-peer-deps

# Set up environment variables
cp apps/dashboard/.env.example apps/dashboard/.env.local
# Edit .env.local with your Firebase credentials

# Start the dashboard
cd apps/dashboard
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to access the dashboard.

### Using the SDK

```bash
# Install the React SDK
npm install @flagship/sdk-react
```

```tsx
// Wrap your app with FlagshipProvider
import { FlagshipProvider } from '@flagship/sdk-react';

function App() {
  return (
    <FlagshipProvider
      apiKey="your_server_key"
      apiUrl="https://your-api.com"
      user={{
        id: 'user_123',
        attributes: {
          email: 'user@example.com',
          country: 'US',
        },
      }}
    >
      <YourApp />
    </FlagshipProvider>
  );
}

// Use flags anywhere in your components
import { useFlag } from '@flagship/sdk-react';

function Feature() {
  const newDesign = useFlag('new-design', false);
  
  return newDesign ? <NewUI /> : <OldUI />;
}
```

---

## 🏗️ Architecture

```
flagship/
├── apps/
│   ├── dashboard/          # Main Next.js application
│   │   ├── app/           # App Router pages
│   │   ├── components/    # React components
│   │   ├── lib/           # Utilities and helpers
│   │   ├── __tests__/     # Vitest unit tests
│   │   └── e2e/           # Playwright E2E tests
│   └── demo/              # Demo application
├── packages/
│   ├── sdk/               # Core SDK (JavaScript)
│   └── sdk-react/         # React hooks and components
└── docs/                  # Documentation
```

### Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 16, React 19, TypeScript 5, Tailwind CSS |
| **Backend** | Next.js API Routes (Serverless Functions) |
| **Database** | Firebase Firestore (NoSQL) |
| **Authentication** | Firebase Auth |
| **Testing** | Vitest, Testing Library, Playwright |
| **CI/CD** | GitHub Actions, Vercel |
| **Monitoring** | Real-time analytics, Audit logs |

---

## ⚡ Features

### 🎯 Feature Flag Management

- **Boolean Flags** - Simple on/off toggles
- **Multivariate Flags** - String, number, or JSON values
- **Project Organization** - Organize flags by projects and environments
- **Quick Toggle** - Toggle flags on/off with a single click

### 🎲 Advanced Targeting

Target users with precision:

```typescript
// Target by email domain
email contains "@company.com"

// Target by country
country in ["US", "CA", "UK"]

// Target premium users
subscription equals "premium"

// Target by percentage
rollout 50% → deterministic hash-based distribution
```

**8 Operators Available:**
- `equals` - Exact match
- `not equals` - Inverse match
- `contains` - String contains
- `in` - Value in list
- `greater than` / `less than` - Numeric comparison
- `greater than or equal` / `less than or equal` - Numeric comparison

### 📊 Analytics Dashboard

- **Evaluation Metrics** - Track how many times each flag is evaluated
- **User Segmentation** - See unique users affected
- **Time-series Charts** - Beautiful charts with auto-refresh
- **Targeting Impact** - Compare targeted vs default evaluations

### 🔍 Audit Logs

Complete audit trail:
- Flag created/updated/deleted
- Targeting rules modified
- Flag toggled on/off
- User attribution
- Timestamp and changes tracked

### 🔑 API Keys

- **Server Keys** - For backend services (full access)
- **Client Keys** - For frontend apps (read-only)
- **Environment Isolation** - Separate keys per environment
- **Secure Storage** - bcrypt hashing with prefix indexing

---

## 🧪 Testing

Comprehensive test coverage:

```bash
# Run all unit and integration tests (31 tests)
npm test

# Run with UI
npm run test:ui

# Run E2E tests with Playwright (10 tests)
npm run test:e2e

# Generate coverage report
npm run test:coverage
```

**Test Coverage:**
- ✅ 15 API integration tests (authentication, CORS, caching)
- ✅ 16 targeting engine unit tests (all operators, hash distribution)
- ✅ 10 E2E tests (authentication flows, API endpoints)

---

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/flagship)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd apps/dashboard
vercel
```

### Environment Variables

Add these to your Vercel project:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### CI/CD Pipeline

GitHub Actions automatically:
1. ✅ Runs ESLint
2. ✅ Runs 31 unit/integration tests
3. ✅ Runs 10 E2E tests with Playwright
4. ✅ Builds the application
5. ✅ Deploys to Vercel on merge to `main`

See [`.github/workflows/ci.yml`](.github/workflows/ci.yml) for details.

---

## 📖 Documentation

- [📘 Architecture Overview](./docs/ARCHITECTURE.md) - System design and data models
- [🗄️ Database Schema](./docs/DATABASE.md) - Firestore collections and indexes
- [🔌 API Reference](./docs/API.md) - REST API endpoints and examples
- [📦 SDK Guide](./docs/SDK.md) - JavaScript and React SDK documentation
- [🔒 Security Guide](./docs/SECURITY.md) - Authentication and best practices
- [🚀 Deployment Guide](./docs/DEPLOYMENT.md) - Vercel and Firebase setup
- [🗺️ Roadmap](./docs/ROADMAP.md) - Future features and improvements

---

## 🎯 Use Cases

### Gradual Rollouts
Roll out features to a percentage of users:
```typescript
// Start with 5% of users
rollout: 5%

// Gradually increase
rollout: 25% → 50% → 100%
```

### A/B Testing
Test different variants:
```typescript
// Variant A (50% of users)
value: "variant-a"
rollout: 50%

// Variant B (50% of users)
value: "variant-b"
rollout: 50%
```

### Beta Testing
Target specific user segments:
```typescript
// Beta testers only
email in ["beta@example.com", "tester@example.com"]

// Internal employees
email contains "@company.com"
```

### Environment-specific Features
Different behavior per environment:
```typescript
// Production: show new feature to 10%
Production env → rollout: 10%

// Staging: show to everyone
Staging env → enabled: true
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Write tests for new features
- Follow TypeScript best practices
- Use conventional commits
- Update documentation

---

## 📊 Project Status

**Current Version:** 1.0.0 (Production Ready)

**Completed Features:**
- ✅ Core feature flag management
- ✅ Advanced targeting with 8 operators
- ✅ Real-time analytics dashboard
- ✅ Complete audit log system
- ✅ REST API with caching
- ✅ React SDK with TypeScript
- ✅ Comprehensive testing (41 tests)
- ✅ CI/CD pipeline
- ✅ Vercel deployment

**Roadmap:**
- 🎯 Webhook integrations
- 🎯 Slack notifications
- 🎯 Custom metrics tracking
- 🎯 Multi-project dashboard
- 🎯 SDK for Vue, Angular, Svelte
- 🎯 Mobile SDKs (iOS, Android)

See [ROADMAP.md](./docs/ROADMAP.md) for details.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org/) - React framework
- [Firebase](https://firebase.google.com/) - Backend infrastructure
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vercel](https://vercel.com/) - Deployment
- [Vitest](https://vitest.dev/) - Unit testing
- [Playwright](https://playwright.dev/) - E2E testing

---

## 📧 Contact

**Project Link:** [https://github.com/yourusername/flagship](https://github.com/yourusername/flagship)

**Live Demo:** [https://flagship-dashboard.vercel.app](https://flagship-dashboard.vercel.app)

---

<div align="center">

**⭐ Star this repo if you find it useful!**

Made with ❤️ by developers, for developers

</div>
