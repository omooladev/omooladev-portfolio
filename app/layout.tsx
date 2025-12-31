import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { ThemeProvider } from './components/ThemeProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://omooladev-portfolio-dev.vercel.app'),
  title: {
    default: 'Omosuyi Olawole | Full-Stack Developer',
    template: '%s | Omosuyi Olawole',
  },
  description: 'Full-Stack Developer specializing in React, Next.js, Node.js, and TypeScript. Building scalable web applications.',
  applicationName: 'Omosuyi Olawole Portfolio',
  authors: [{ name: 'Omosuyi Olawole', url: 'https://omooladev-portfolio-dev.vercel.app' }],
  generator: 'Next.js',
  keywords: ['Omosuyi Olawole', 'omooladev', 'Full-Stack Developer', 'React', 'Next.js', 'Node.js', 'TypeScript'],
  referrer: 'origin-when-cross-origin',
  creator: 'Omosuyi Olawole',
  publisher: 'Omosuyi Olawole',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://omooladev-portfolio-dev.vercel.app/',
    title: 'Omosuyi Olawole | Full-Stack Developer',
    description: 'Full-Stack Developer specializing in React, Next.js, Node.js, and TypeScript',
    siteName: 'Omosuyi Olawole Portfolio',
    images: [
      {
        url: '/images/omooladev.png',
        width: 1200,
        height: 630,
        alt: 'Omosuyi Olawole - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omosuyi Olawole | Full-Stack Developer',
    description: 'Full-Stack Developer specializing in React, Next.js, Node.js, and TypeScript',
    creator: '@omooladev',
    images: ['/images/omooladev.png'],
  },
  icons: {
    icon: '/images/omooladev-logo.png',
    shortcut: '/images/omooladev-logo.png',
    apple: '/images/omooladev-logo.png',
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/8a380186d4.js" crossOrigin="anonymous" async />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
