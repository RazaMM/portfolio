import Desktop from '@/components/desktop/desktop';
import { DesktopShortcut } from '@/components/desktop/desktop-shortcut';
import Taskbar from '@/components/taskbar/taskbar';
import { TaskbarButton } from '@/components/taskbar/taskbar-button';
import { TaskbarClock } from '@/components/taskbar/taskbar-clock';
import { TaskbarContent } from '@/components/taskbar/taskbar-content';
import { TaskbarMenu } from '@/components/taskbar/taskbar-menu';
import { TaskbarMenuItem } from '@/components/taskbar/taskbar-menu-item';
import Window from '@/components/window';
import HomePage from '@/img/homepage.png';
import Notepad from '@/img/notepad.png';
import { getAllSlugs, getPost } from '@/lib/blog-posts';
import 'katex/dist/katex.css';
import { Metadata, ResolvingMetadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const formatter = new Intl.DateTimeFormat();

type BlogPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: BlogPageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await getPost(slug);

  return {
    title: `${metadata.title} | Ray M's Portfolio`,
    description: metadata.description ?? '',
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const { Post, metadata } = await getPost(slug);

  return (
    <>
      <Head>
        <title>{metadata.title} | Ray M&#39;s Portfolio</title>
      </Head>
      <Desktop>
        <DesktopShortcut as={Link} href='/blog' icon={{ src: Notepad, alt: '' }}>
          Back to Blog Home
        </DesktopShortcut>
        <DesktopShortcut as={Link} href='/' icon={{ src: HomePage, alt: '' }}>
          Back to Homepage
        </DesktopShortcut>
      </Desktop>

      <Window name={metadata.title} active icon={{ src: Notepad, alt: '' }}>
        <div className='w-dvw max-w-2xl bg-white p-2'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-black'>{metadata.title}</h1>
            <span>Posted on {formatter.format(metadata.date)}</span>
          </div>
          <hr className='my-2' />
          <div className='mx-auto prose max-w-none prose-code:font-[inherit] prose-pre:font-[inherit] prose-pre:has-[>.math]:bg-white prose-pre:has-[>.math]:p-0 prose-pre:has-[>.math]:text-black'>
            <Post />
          </div>
        </div>
      </Window>

      <Taskbar>
        <TaskbarMenu title="Ray's Blog">
          <TaskbarMenuItem as={Link} href='/blog' icon={{ src: Notepad, alt: '' }}>
            Back to Blog Home
          </TaskbarMenuItem>
          <TaskbarMenuItem as={Link} href='/' icon={{ src: HomePage, alt: '' }}>
            Back to Homepage
          </TaskbarMenuItem>
        </TaskbarMenu>

        <TaskbarContent>
          <TaskbarButton active={true} icon={{ src: Notepad, alt: '' }}>
            {metadata.title}
          </TaskbarButton>
        </TaskbarContent>

        <TaskbarClock />
      </Taskbar>
    </>
  );
}

export async function generateStaticParams() {
  return await getAllSlugs();
}

export const dynamicParams = false;
