import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import './globals.css';
const robotoCondensed = Roboto_Condensed({ variable: '--font-roboto-condensed', subsets: ['latin'], display: 'swap' });
export const metadata: Metadata = {
  title: 'Aalvee Ahtav | Software Engineer',
  description: 'Software engineer and UT Dallas computer science student. Explore production engineering experience at Walmart Global Tech, full-stack projects, and AI applications.',
  authors: [{ name: 'Aalvee Ahtav' }], creator: 'Aalvee Ahtav',
  openGraph: { title: 'Aalvee Ahtav | Software Engineer', description: 'Thoughtful code. Real-world impact. Explore my engineering experience and selected projects.', siteName: 'Aalvee Ahtav Portfolio', locale: 'en_US', type: 'website' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={robotoCondensed.variable}>{children}</body></html>;
}
