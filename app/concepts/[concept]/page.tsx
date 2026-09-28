import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '../../components/Navigation';
import HeroSection from '../../components/HeroSection';
import FusionHeroSection from '../../components/FusionHeroSection';
import ProjectsSection from '../../components/ProjectsSection';
import AboutSection from '../../components/AboutSection';
import SkillsSection from '../../components/SkillsSection';
import ContactSection from '../../components/ContactSection';
import styles from './preview.module.css';

export const metadata = { title: 'BMW × Messi | Portfolio concepts', robots: { index: false, follow: false } };

export default async function ConceptPreview({ params }: { params: Promise<{ concept: string }> }) {
  const { concept } = await params;
  if (concept !== '3' && concept !== '4') notFound();
  return <>
    <div className={styles.switcher}>
      <span>DESIGN PREVIEW</span>
      <div><Link href="/concepts/3" aria-current={concept === '3' ? 'page' : undefined}>03 · Driven by passion</Link><Link href="/concepts/4" aria-current={concept === '4' ? 'page' : undefined}>04 · Two icons. One drive.</Link></div>
      <Link href="/">Main site ↗</Link>
    </div>
    <Navigation />
    <main id="main">
      {concept === '3' ? <HeroSection /> : <FusionHeroSection />}
      <ProjectsSection />
      {concept === '3' && <section className={styles.celebration} aria-labelledby="passion-title">
        <div className={styles.celebrationPhoto}><Image src="/images/concepts/messi-celebration.jpg" alt="Messi celebrating with both hands raised, wearing Argentina’s number 10 shirt" fill sizes="(max-width: 760px) 100vw, 70vw" /></div>
        <div className={`container ${styles.passionCopy}`}><p className="eyebrow"><span className="section-number">BEYOND THE CODE</span> THE SAME DRIVE.</p><h2 id="passion-title">Precision in the details.<br />Passion in everything<span className="blue-period">.</span></h2><p>From the engineering of BMW M to the artistry of Messi.<br />Two inspirations. The same pursuit of excellence.</p><span className={styles.signature}>BMW M <i /> ARGENTINA 10</span></div>
      </section>}
      <AboutSection /><SkillsSection /><ContactSection />
    </main>
    <footer className="footer container"><a className="wordmark" href="#home">AALVEE AHTAV</a><span>Personal portfolio · Inspired by BMW M & the beautiful game.</span><a href="#home">Back to top ↑</a></footer>
  </>;
}
