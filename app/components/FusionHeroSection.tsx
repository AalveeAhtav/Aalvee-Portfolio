import Image from 'next/image';
import styles from './FusionHeroSection.module.css';

export default function FusionHeroSection() {
  return <section id="home" className={styles.fusion} aria-labelledby="fusion-title">
        <div className={styles.flag}><Image src="/images/concepts/messi-argentina.jpg" alt="Messi wearing Argentina’s number 10 shirt in front of the Argentina flag" fill priority sizes="(max-width: 760px) 100vw, 65vw" /></div>
        <div className={styles.car}><Image src="/images/m3-hero.webp" alt="Blue BMW M3" fill priority sizes="(max-width: 760px) 100vw, 70vw" /></div>
        <div className={`container ${styles.intro}`}>
          <p className="eyebrow"><span className="section-number">M / 10</span> TWO ICONS. ONE DRIVE.</p>
          <h1 id="fusion-title">Aalvee Ahtav<span>Software Engineer.</span></h1>
          <p className="hero-description">Thoughtful code. Real-world impact.<br />Driven by precision. Inspired by possibility.</p>
          <div className="actions"><a className="button primary" href="#work">Explore my work ↗</a><a className="button secondary" href="/Aalvee_Ahtav_Resume.pdf" target="_blank" rel="noopener noreferrer">View resume ↗</a></div>
          <p className="location"><span className="status-dot" /> Based in Dallas, Texas</p>
        </div>
        <div className={`container ${styles.fusionBottom}`}><a href="#work">↓ &nbsp; SCROLL TO EXPLORE</a><span>PRECISION / PASSION</span></div>
      </section>;
}
