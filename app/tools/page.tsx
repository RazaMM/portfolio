import { Layout } from '@/components/layout';
import programs from '@/components/programs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Job Application Tracker | Raza Mahmood's Portfolio",
  description: 'Keep track of your job application progress with this simple tool.',
};

export default function ToolsPage() {
  return <Layout programs={programs} defaultOpenPrograms={['biography']} />;
}
