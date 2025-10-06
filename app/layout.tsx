import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import React from 'react';
import './globals.css';

const w95 = localFont({ src: './w95fa.woff2', display: 'swap' });

export const metadata: Metadata = {
  title: "Ray M's Portfolio",
  description: 'Ray M is a software engineer and web developer based in Toronto, Canada.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${w95.className} flex h-dvh w-dvw cursor-w95-auto flex-col overflow-hidden bg-w95-cyan`}>
        <Analytics />
        <main className='flex flex-1 flex-col'>{children}</main>
      </body>
    </html>
  );
}
