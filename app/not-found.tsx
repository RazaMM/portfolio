'use client';

import React from 'react';
import Window from '@/components/window';
import notFound from '@/components/programs/not-found';
import Desktop from '@/components/desktop';
import Layout from '@/components/layout';

export default function NotFound() {
  return (
    <Layout>
      <Desktop />
      <Window program={notFound} active />
    </Layout>
  );
}
