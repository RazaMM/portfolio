import type { Metadata } from 'next'
import localFont from 'next/font/local';
import './globals.css'
import React from "react";

const w95 = localFont({ src: './w95fa.woff2', display: 'swap' });

export const metadata: Metadata = {
  title: "Raza Mahmood's Portfolio",
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${w95.className} cursor-w95-auto bg-w95-cyan overflow-hidden h-screen w-screen flex flex-col`}>
        {children}
      </body>
    </html>
  )
}
