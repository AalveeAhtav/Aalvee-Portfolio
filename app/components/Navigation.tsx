'use client';
import { useEffect, useState } from 'react';
const links = [['work', 'Work'], ['about', 'About'], ['experience', 'Experience'], ['contact', 'Contact']];
export default function Navigation() {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: '-15% 0px -55% 0px' });
    for (const id of ['home', ...links.map(([id]) => id)]) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);
  return <header className="site-header"><div className="nav-inner container">
    <a className="wordmark" href="#home" onClick={() => setOpen(false)}>AALVEE AHTAV<span className="m-stripes" aria-hidden="true"><i /><i /><i /></span></a>
    <button className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Menu +'}</button>
    <nav id="main-navigation" aria-label="Main navigation" className={open ? 'navigation is-open' : 'navigation'} onKeyDown={(event) => { if (event.key === 'Escape') { setOpen(false); document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus(); } }}>
      {links.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
    </nav>
    <a className="nav-contact" href="mailto:aalvee6403@gmail.com">Let’s talk <span aria-hidden="true">↗</span></a>
  </div></header>;
}
