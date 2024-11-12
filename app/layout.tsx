import type { Metadata } from 'next';
import './globals.css';

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
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
