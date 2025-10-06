import { Layout } from '@/components/layout';
import { programs, shortcuts } from '@/components/programs/tools';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tools | Ray M's Portfolio",
  description: 'Tools and utilities for various tasks.',
};

export default function ToolsPage() {
  return <Layout programs={programs} shortcuts={shortcuts} />;
}
