import { Layout } from '@/components/layout';
import { programs } from '@/components/programs/tools';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tools | Raza Mahmood's Portfolio",
  description: 'Tools and utilities for various tasks.',
};

export default function ToolsPage() {
  return <Layout programs={programs} />;
}
