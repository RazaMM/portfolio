import type { Metadata } from 'next'
import localFont from 'next/font/local';
import './globals.css'
import React from "react";
import programs from "@/components/programs";
import Taskbar from "@/components/Taskbar";

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
        <main className="flex-1 p-2 h-[calc(100%_-_theme(height.10))]">
          {children}
        </main>

        <Taskbar/>
      </body>
    </html>
  )
}
