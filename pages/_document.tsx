import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className={`flex h-screen w-screen cursor-w95-auto flex-col overflow-hidden`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
