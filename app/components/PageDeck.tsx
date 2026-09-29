'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

const pages = [
  ['home', 'Home'], ['work', 'Work'], ['about', 'About'],
  ['experience', 'Experience'], ['skills', 'Skills'], ['contact', 'Contact'],
];

export default function PageDeck({ children }: { children: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const current = useRef(0);
  const panels = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useRef<(index: number, history?: boolean) => void>(() => {});

  useEffect(() => {
    let lockedUntil = 0;
    let lastWheel = 0;
    let wheelTotal = 0;
    let edgeGesture = false;
    let touchStart: { y: number; top: boolean; bottom: boolean } | null = null;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const go = (index: number, pushHistory = false) => {
      if (index < 0 || index >= pages.length) return;
      if (index !== current.current) {
        current.current = index;
        setActive(index);
        lockedUntil = performance.now() + (reducedMotion.matches ? 150 : 650);
        requestAnimationFrame(() => {
          const panel = panels.current[index];
          if (panel) { panel.scrollTop = 0; panel.focus({ preventScroll: true }); }
        });
      }
      if (location.hash !== `#${pages[index][0]}`) {
        window.history[pushHistory ? 'pushState' : 'replaceState'](null, '', `#${pages[index][0]}`);
      }
    };
    navigate.current = go;
    const fromHash = () => {
      const index = pages.findIndex(([id]) => location.hash === `#${id}`);
      go(index < 0 ? 0 : index);
    };
    fromHash();
    const canScroll = (direction: number) => {
      const panel = panels.current[current.current];
      return !!panel && (direction > 0
        ? panel.scrollTop + panel.clientHeight < panel.scrollHeight - 2
        : panel.scrollTop > 2);
    };
    const wheel = (event: WheelEvent) => {
      if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      const now = performance.now();
      const fresh = now - lastWheel > 180;
      lastWheel = now;
      if (now < lockedUntil) { event.preventDefault(); return; }
      const direction = Math.sign(event.deltaY);
      if (!direction) return;
      if (canScroll(direction)) { edgeGesture = false; wheelTotal = 0; return; }
      event.preventDefault();
      if (fresh) { edgeGesture = true; wheelTotal = 0; }
      if (!edgeGesture) return;
      if (Math.sign(wheelTotal) !== direction) wheelTotal = 0;
      wheelTotal += event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? innerHeight : 1);
      if (Math.abs(wheelTotal) >= 50) {
        go(current.current + direction);
        edgeGesture = false;
        wheelTotal = 0;
      }
    };
    const click = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element).closest('a');
      const index = pages.findIndex(([id]) => anchor?.getAttribute('href') === `#${id}`);
      if (index >= 0) { event.preventDefault(); go(index, true); }
    };
    const key = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey ||
        (event.target as Element).closest('a, button, input, textarea, select, summary, [contenteditable="true"]')) return;
      const direction = ['ArrowDown', 'PageDown', ' '].includes(event.key) ? (event.shiftKey ? -1 : 1)
        : ['ArrowUp', 'PageUp'].includes(event.key) ? -1 : 0;
      if (direction && !canScroll(direction)) {
        event.preventDefault();
        if (performance.now() >= lockedUntil) go(current.current + direction);
      }
    };
    const touch = (event: TouchEvent) => {
      touchStart = event.touches.length === 1 ? {
        y: event.touches[0].clientY, top: !canScroll(-1), bottom: !canScroll(1),
      } : null;
    };
    const touchEnd = (event: TouchEvent) => {
      if (!touchStart || !event.changedTouches.length) return;
      const delta = touchStart.y - event.changedTouches[0].clientY;
      if (performance.now() >= lockedUntil && Math.abs(delta) > 60 &&
        (delta > 0 ? touchStart.bottom : touchStart.top)) go(current.current + Math.sign(delta));
      touchStart = null;
    };
    const main = document.getElementById('main')!;
    main.addEventListener('wheel', wheel, { passive: false });
    main.addEventListener('touchstart', touch, { passive: true });
    main.addEventListener('touchend', touchEnd, { passive: true });
    document.addEventListener('click', click);
    document.addEventListener('keydown', key);
    window.addEventListener('popstate', fromHash);
    window.addEventListener('hashchange', fromHash);
    return () => {
      main.removeEventListener('wheel', wheel);
      main.removeEventListener('touchstart', touch);
      main.removeEventListener('touchend', touchEnd);
      document.removeEventListener('click', click);
      document.removeEventListener('keydown', key);
      window.removeEventListener('popstate', fromHash);
      window.removeEventListener('hashchange', fromHash);
    };
  }, []);

  return <main id="main" className="page-deck" tabIndex={-1}>
    {children.map((child, index) => <div
      key={pages[index][0]} ref={node => { panels.current[index] = node; }}
      className="deck-panel" hidden={active !== index} inert={active !== index}
      tabIndex={-1} role="region" aria-label={`${pages[index][1]} page`}
    >{child}</div>)}
    <nav className="deck-controls" aria-label="Page navigation">
      <button aria-label="Previous page" disabled={active === 0} onClick={() => navigate.current(active - 1, true)}>←</button>
      <span aria-live="polite" aria-atomic="true">{String(active + 1).padStart(2, '0')} / 06 <span>{pages[active][1]}</span></span>
      <button aria-label="Next page" disabled={active === pages.length - 1} onClick={() => navigate.current(active + 1, true)}>→</button>
    </nav>
  </main>;
}
