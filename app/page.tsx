import { Layout } from '@/components/layout';
import programs from '@/components/programs/home';

export default function Home() {
  return <Layout programs={programs} defaultOpenPrograms={['biography']} />;
}
