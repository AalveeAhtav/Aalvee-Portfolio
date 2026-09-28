import Image from 'next/image';

export default function HeroSection() {
  return <section id="home" className="hero" aria-labelledby="hero-title">
    <Image className="hero-image" src="/images/m3-hero.webp" alt="Blue BMW M3 in a dark studio with its headlights illuminated" fill priority sizes="100vw" />
    <div className="hero-shade" />
    <div className="container hero-content">
      <p className="eyebrow"><span className="blue-line" /> ENGINEERED WITH INTENT.</p>
      <h1 id="hero-title">Aalvee Ahtav<span>Software Engineer.</span></h1>
      <p className="hero-description">Thoughtful code. Real-world impact.<br />Driven to build what comes next.</p>
      <div className="actions">
        <a className="button primary" href="#work">Explore my work <span aria-hidden="true">↗</span></a>
        <a className="button secondary" href="/Aalvee_Ahtav_Resume.pdf" target="_blank" rel="noopener noreferrer">View resume <span aria-hidden="true">↗</span></a>
      </div>
      <p className="location"><span className="status-dot" /> Based in Dallas, Texas</p>
    </div>
    <div className="hero-bottom container">
      <a className="scroll-cue" href="#work"><span aria-hidden="true">↓</span> SCROLL TO EXPLORE</a>
      <span className="car-caption">BMW M3 COMPETITION xDRIVE <span className="m-stripes" aria-hidden="true"><i /><i /><i /></span></span>
    </div>
    <div className="hero-index" aria-hidden="true">01 <span>/ 05</span></div>
  </section>;
}
