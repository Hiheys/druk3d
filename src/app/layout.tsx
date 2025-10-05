import type { Metadata } from 'next';
import '@/styles/globals.css';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import React from 'react';

export const metadata: Metadata = {
  title: "Drukarnia 3D - Twój kompletny przewodnik",
  description:
    "Cześć! Jestem Bartosz, znany również jako Hiheys. Zapraszam Cię do mojego portfolio. Znajdziesz tam krótki opis kim jestem oraz kilka moich projektów",
  icons: {
    icon: '/avatar.png',
  },
  openGraph: {
    title: "Drukarnia 3D - Twój kompletny przewodnik",
    description:
      "Cześć! Jestem Bartosz, znany również jako Hiheys. Zapraszam Cię do mojego portfolio. Znajdziesz tam krótki opis kim jestem oraz kilka moich projektów",
    images: [
      {
        url: 'avatar.png', 
        width: 1200,
        height: 630,
        alt: 'Hiheys Portfolio',
      },
    ],
    siteName: 'Hiheys Portfolio',
    type: 'website',
    url: 'https://hiheys.tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Drukarnia 3D - Twój kompletny przewodnik",
    description:
      "Cześć! Jestem Bartosz, znany również jako Hiheys. Zapraszam Cię do mojego portfolio. Znajdziesz tam krótki opis kim jestem oraz kilka moich projektów",
    images: ['/avatar.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'flex min-h-screen flex-col overflow-x-hidden font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}