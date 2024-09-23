import React from 'react';
import Taskbar from '@/components/taskbar';
import localFont from 'next/font/local';
import Head from 'next/head';

const w95 = localFont({ src: '../fonts/w95fa.woff2', display: 'swap' });

type LayoutProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

const Layout = ({ title, description, children }: LayoutProps) => {
  return (
    <div className={`${w95.className} h-full w-full`}>
      <Head>
        <title>{title ?? "Raza Mahmood's Portfolio"}</title>
        <meta name='description' content={description ?? "Raza Mahmood's Portfolio"} />
      </Head>

      <main className={`${w95.className} relative h-[calc(100%_-_theme(height.10))] flex-1 bg-w95-cyan p-2`}>
        {children}
      </main>
      <Taskbar />
    </div>
  );
};

export default Layout;
