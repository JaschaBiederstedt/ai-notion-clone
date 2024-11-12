import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';

import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'AI Notion Clone',
  description: 'AI Notion Clone',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
