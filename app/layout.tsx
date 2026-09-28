import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Aalvee Ahtav | Software Engineer',
  description: 'Software engineer and UT Dallas computer science student. Explore production engineering experience at Walmart Global Tech, full-stack projects, and AI applications.',
  authors: [{ name: 'Aalvee Ahtav' }], creator: 'Aalvee Ahtav',
  openGraph: { title: 'Aalvee Ahtav | Software Engineer', description: 'Thoughtful code. Real-world impact. Explore my engineering experience and selected projects.', siteName: 'Aalvee Ahtav Portfolio', locale: 'en_US', type: 'website' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
