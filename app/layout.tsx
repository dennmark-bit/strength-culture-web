import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Strength Culture | Gym & Strength Training in Central HK',
  description: 'Strength training and group fitness classes in the heart of Central, Hong Kong. G/F 27-29 Li Yuen Street West.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-darkbg text-white`}>{children}</body>
    </html>
  );
}
