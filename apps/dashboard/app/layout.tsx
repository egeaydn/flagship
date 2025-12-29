import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Flagship - Feature Flags Platform",
    template: "%s | Flagship"
  },
  description: "Modern feature flag management platform for teams. Control feature rollouts, A/B testing, and targeted deployments with ease.",
  keywords: ["feature flags", "feature toggles", "A/B testing", "deployment", "release management", "targeting", "rollout"],
  authors: [{ name: "Flagship Team" }],
  creator: "Flagship",
  publisher: "Flagship",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flagship.app",
    title: "Flagship - Feature Flags Platform",
    description: "Modern feature flag management platform for teams. Control feature rollouts, A/B testing, and targeted deployments with ease.",
    siteName: "Flagship",
    images: [
      {
        url: "/FlagShip-logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "Flagship Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flagship - Feature Flags Platform",
    description: "Modern feature flag management platform for teams",
    images: ["/FlagShip-logo-transparent.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#fff',
              color: '#363636',
              border: '1px solid #e5e7eb',
            },
            success: {
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
