import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Strength Culture | Central Hong Kong',
  description: 'Hong Kong\'s premier strength gym in Central. Group classes, personal training, Olympic lifting. G/F 27-29 Li Yuen Street West.',
  keywords: 'gym Central Hong Kong, strength training HK, personal trainer Central, functional fitness Hong Kong',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
