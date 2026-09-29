import FusionHeroSection from './components/FusionHeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import AboutSection, { ExperienceSection } from './components/AboutSection';
import Navigation from './components/Navigation';
import PageDeck from './components/PageDeck';

export default function Portfolio() {
  return <div className="portfolio-app">
    <a className="skip-link" href="#main">Skip to content</a>
    <Navigation />
    <PageDeck>
      <FusionHeroSection />
      <ProjectsSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <div className="contact-page"><ContactSection />
    <footer className="footer container">
      <a className="wordmark" href="#home">AALVEE AHTAV<span className="m-stripes" aria-hidden="true"><i /><i /><i /></span></a>
      <span>Personal portfolio · Inspired by BMW M & the beautiful game.</span>
      <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
    </footer></div>
    </PageDeck>
  </div>;
}
