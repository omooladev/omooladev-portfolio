import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ContactSection from './components/sections/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Omosuyi Olawole | Full-Stack Developer',
  description: 'Full-Stack Developer specializing in React, Next.js, Node.js, and TypeScript. Building scalable web applications with modern technologies. Based in Lagos, Nigeria.',
  keywords: [
    'Omosuyi Olawole',
    'omooladev',
    'Full-Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'TypeScript',
    'Web Developer',
    'Software Engineer',
    'JavaScript Developer',
    'Lagos Developer',
    'Nigeria Developer'
  ],
  authors: [{ name: 'Omosuyi Olawole', url: 'https://omooladev-portfolio-dev.vercel.app' }],
  creator: 'Omosuyi Olawole',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://omooladev-portfolio-dev.vercel.app/',
    title: 'Omosuyi Olawole | Full-Stack Developer',
    description: 'Full-Stack Developer specializing in React, Next.js, Node.js, and TypeScript. Building scalable web applications with modern technologies.',
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
    description: 'Full-Stack Developer specializing in React, Next.js, Node.js, and TypeScript.',
    creator: '@omooladev',
    images: ['/images/omooladev.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
