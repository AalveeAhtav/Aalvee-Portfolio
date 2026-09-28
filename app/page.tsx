import FusionHeroSection from './components/FusionHeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection';
import Navigation from './components/Navigation';

export default function Portfolio() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navigation />
    <main id="main"><FusionHeroSection /><ProjectsSection /><AboutSection /><SkillsSection /><ContactSection /></main>
    <footer className="footer container">
      <a className="wordmark" href="#home">AALVEE AHTAV<span className="m-stripes" aria-hidden="true"><i /><i /><i /></span></a>
      <span>Personal portfolio · Inspired by BMW M & the beautiful game.</span>
      <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
    </footer>
  </>;
}
