import Image from 'next/image';
export default function AboutSection() {
  return <section id="about" className="about-section" aria-labelledby="about-title">
    <div className="about-scene">
    <div className="about-background" aria-hidden="true"><Image src="/images/concepts/messi-celebration.jpg" alt="" fill sizes="100vw" /></div>
    <div className="container"><div className="about-intro">
      <div className="portrait-frame"><Image src="/IMG_7884.jpeg" alt="Aalvee Ahtav" fill sizes="(max-width: 760px) 80vw, 300px" /><span className="portrait-caption">THE PERSON BEHIND THE CODE</span></div>
      <div className="about-copy"><p className="eyebrow"><span className="section-number">03</span> A LITTLE ABOUT ME</p><h2 id="about-title">Curiosity is<br />my driving force</h2>
        <p>I’m Aalvee, a computer science student at The University of Texas at Dallas. I build full-stack applications, explore AI, and enjoy turning complex problems into useful software.</p>
        <p>From shipping features for live Sam’s Club locations to building for a nonprofit in 24 hours, I care about the people on the other side of the screen.</p>
        <div className="education"><span className="eyebrow">EDUCATION</span><strong>The University of Texas at Dallas</strong><span>Bachelor’s in Computer Science · Aug 2024–Present</span><strong>Dallas College</strong><span>Associate’s in Computer Science · 2022–2024 · GPA 3.90</span></div>
      </div>
    </div>
    </div></div>
  </section>;
}

export function ExperienceSection() {
  return <section id="experience" className="experience-section" aria-labelledby="experience-title"><div className="experience-block container">
      <div className="experience-heading"><p className="eyebrow">EXPERIENCE / IN PRODUCTION</p><h2 id="experience-title">Built for the<br />real world<span className="blue-period">.</span></h2><a className="text-link" href="/Aalvee_Ahtav_Resume.pdf" target="_blank" rel="noopener noreferrer">The full story in my resume <span aria-hidden="true">↗</span></a></div>
      <div className="experience-detail">
        <div className="experience-title"><div><h3>Walmart Global Tech</h3><p>Software Engineer Intern</p></div><span className="eyebrow">JUN–AUG 2026</span></div>
        <p className="team-label">Sam’s Club · Bake-n-Bite Team</p>
        <p>Shipped production features for the Café Kitchen order-management app using Next.js, React, TypeScript, and React Native Shell.</p>
        <ul className="experience-points"><li>Built configurable label printing with per-UPC triggers, printer readiness handling, and order-history reprinting.</li><li>Extended Azure Cosmos DB schemas and integrated Quantum Metric observability.</li><li>Improved reliability with Jest unit tests, Playwright E2E coverage, and SonarQube fixes.</li></ul>
        <div className="impact-metrics"><div><strong>6.4<span> → </span>4.0<span>%</span></strong><span>Nil-pick rate at a pilot club</span></div><div><strong>7.3<span> → </span>4.5<span>%</span></strong><span>Order-affected rate at a pilot club</span></div></div>
        <p className="metric-context">After adding order numbers to pizza labels to help members and drivers match orders to receipts.</p>
        <details className="more-experience"><summary>More experience & recognition <span aria-hidden="true">+</span></summary><p><strong>Sam’s Club Now, Dallas</strong><br />Fresh Associate · Apr 2025–Present<br />Membership Services Associate · Jul 2022–Apr 2025</p><p>Supported inventory, member services, mobile app adoption, and online-order pickup. Recognized as Associate of the Month in December 2023, June 2024, and March 2026.</p></details>
      </div>
    </div>
  </section>;
}
