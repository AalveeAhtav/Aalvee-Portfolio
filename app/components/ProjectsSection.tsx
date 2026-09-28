'use client';
import { useState } from 'react';
import Image from 'next/image';
const projects = [
  { title: 'FinSight AI', type: 'FULL STACK / AI', image: '/finsight.png', description: 'From annual reports to answers. A financial analysis app that ingests PDFs and turns complex documents into a conversation with an AI chatbot.', tools: ['Next.js', 'Flask', 'LangChain', 'OpenAI'], repo: 'https://github.com/Aproteem/HACK-AI-2.5' },
  { title: 'CardiCrew', type: 'CODE FOR GOOD / 2025', image: null, description: 'Built for BlackHeart NGO in 24 hours at JPMorgan Code for Good. A full-stack platform with a real-time needs heat map and authenticated internal and public content controls.', tools: ['React', 'Node.js', 'Firebase', 'Gemini AI'], repo: null },
  { title: 'Flight Plan', type: 'ALGORITHMS / JAVA', image: '/flights.png', description: 'Find every valid flight route between two cities, then rank the top three by cost or travel time using iterative backtracking.', tools: ['Java', 'Iterative backtracking'], repo: 'https://github.com/AalveeAhtav/Flight_Project' },
  { title: 'Complex Navigation Game', type: 'ALGORITHMS / JAVA', image: '/complex.png', description: 'Explore a complex of connected locations and find the shortest route between them with Dijkstra’s algorithm.', tools: ['Java', 'Dijkstra’s algorithm'], repo: 'https://github.com/AalveeAhtav/Complex-Game' },
  { title: 'Aim Trainer', type: 'INTERACTIVE / PYTHON', image: '/aim_trainer.png', description: 'An interactive target practice game that tracks hits, misses, and accuracy. A small experiment in feedback, focus, and precision.', tools: ['Python', 'Game development'], repo: 'https://github.com/AalveeAhtav/aim-trainer-python' },
  { title: 'Spooderman Hangman', type: 'TERMINAL / C++', image: '/spooderman.png', description: 'A terminal-based word guessing game with Spider-Man ASCII animations, custom game logic, and a playful text interface.', tools: ['C++', 'ASCII art'], repo: 'https://github.com/AalveeAhtav/DallasCollege-SpoodermanGame' },
];
export default function ProjectsSection() {
  const [page, setPage] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(page * 2, page * 2 + 2);
  return <section id="work" className="work-section section-border" aria-labelledby="work-title">
    <div className="work-scene">
      <Image src="/images/m3-profile.webp" alt="Side profile of a blue BMW M3" fill sizes="100vw" className="profile-image" />
      <div className="work-shade" />
      <div className="container work-heading"><p className="eyebrow"><span className="section-number">02</span> BUILT TO MAKE A DIFFERENCE</p><h2 id="work-title">Selected work<span className="blue-period">.</span></h2><p>Different challenges.<br />The same drive to solve them.</p></div>
    </div>
    <div className="container projects-content">
      <div id="project-list" className="projects-grid">
        {visible.map(project => <article className="project-card" key={project.title}>
          <div className="project-visual">
            {project.image ? <Image src={project.image} alt={`${project.title} application screenshot`} fill sizes="(max-width: 760px) 90vw, 42vw" /> : <div className="cardicrew-art" aria-label="CardiCrew project title illustration"><span className="heart-mark" aria-hidden="true">♡</span><strong>CardiCrew</strong><span>TECHNOLOGY WITH HEART.</span><div className="pulse-line" aria-hidden="true" /></div>}
            <span className="project-number">{String(projects.indexOf(project) + 1).padStart(2, '0')} / 06</span>
          </div>
          <div className="project-copy"><p className="eyebrow">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><ul className="tags" aria-label="Technologies">{project.tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
            {project.repo ? <a className="text-link" href={project.repo} target="_blank" rel="noopener noreferrer">View on GitHub <span aria-hidden="true">↗</span><span className="sr-only"> — {project.title}</span></a> : <a className="text-link" href="mailto:aalvee6403@gmail.com?subject=Tell%20me%20about%20CardiCrew">Let’s talk about this project <span aria-hidden="true">↗</span></a>}
          </div>
        </article>)}
      </div>
      <div className="project-controls">
        <button className="text-link" aria-expanded={showAll} aria-controls="project-list" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show featured projects −' : 'Show all 6 projects + '}</button>
        {!showAll && <div className="pagination"><button aria-label="Previous projects" disabled={page === 0} onClick={() => setPage(page - 1)}>←</button><span aria-live="polite">{String(page * 2 + 1).padStart(2, '0')}–{String(page * 2 + 2).padStart(2, '0')} <span>/ 06</span></span><button aria-label="Next projects" disabled={page === 2} onClick={() => setPage(page + 1)}>→</button></div>}
      </div>
    </div>
  </section>;
}
