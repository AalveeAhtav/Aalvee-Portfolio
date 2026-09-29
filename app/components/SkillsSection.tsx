const groups = [
  { number: '01', name: 'Languages', skills: ['Java', 'Python', 'C / C++', 'JavaScript', 'TypeScript'] },
  { number: '02', name: 'Web & applications', skills: ['React', 'React Native', 'Next.js', 'Node.js', 'Express.js', 'HTML / CSS', 'Zod'] },
  { number: '03', name: 'Data & infrastructure', skills: ['Azure Cosmos DB', 'MongoDB', 'MySQL', 'AWS', 'Linux', 'CI / CD'] },
  { number: '04', name: 'Developer toolkit', skills: ['Git', 'GitHub', 'Postman', 'Jest', 'Playwright', 'SonarQube'] },
];
import Image from 'next/image';
import type { CSSProperties } from 'react';

const skillIcons: Record<string, string[]> = {
  Java: ['java'], Python: ['python'], 'C / C++': ['cplusplus'],
  JavaScript: ['javascript'], TypeScript: ['typescript'],
  React: ['react'], 'React Native': ['react'], 'Next.js': ['nextjs'],
  'Node.js': ['nodejs'], 'Express.js': ['express'], 'HTML / CSS': ['html5', 'css3'], Zod: ['zod'],
  'Azure Cosmos DB': ['cosmosdb'], MongoDB: ['mongodb'], MySQL: ['mysql'],
  AWS: ['amazonwebservices'], Linux: ['linux'],
  Git: ['git'], GitHub: ['github'], Postman: ['postman'], Jest: ['jest'],
  Playwright: ['playwright'], SonarQube: ['sonarqube'],
};

function SkillIcon({ name }: { name: string }) {
  return <span className="skill-icon" aria-hidden="true">
    {name === 'CI / CD' ? (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" focusable="false">
        <path d="M9 11v14M12 10l12 7M12 26l12-7" />
        <circle cx="9" cy="7" r="4" /><circle cx="9" cy="29" r="4" /><circle cx="28" cy="18" r="4" />
      </svg>
    ) : skillIcons[name].map(icon => (
      <Image key={icon} src={`/icons/tech/${icon}.svg`} alt="" width={32} height={32}
        className={['express', 'github', 'amazonwebservices'].includes(icon) ? 'skill-logo skill-logo-light' : 'skill-logo'} />
    ))}
  </span>;
}

export default function SkillsSection() {
  return <section id="skills" className="skills-section section-border" aria-labelledby="skills-title"><div className="container">
    <div className="skills-heading"><div><p className="eyebrow"><span className="section-number">04</span> UNDER THE HOOD</p><h2 id="skills-title">The engineering toolkit<span className="blue-period">.</span></h2></div><p>The right tools.<br />A thoughtful approach.</p></div>
    <div className="skills-grid">{groups.map(group => (
      <div className="skill-group" key={group.name}>
        <span className="skill-number">/{group.number}</span><h3>{group.name}</h3>
        <ul style={{ '--skill-rows': Math.ceil(group.skills.length / 2) } as CSSProperties}>
          {group.skills.map(skill => <li key={skill}><SkillIcon name={skill} /><span>{skill}</span></li>)}
        </ul>
      </div>
    ))}</div>
  </div></section>;
}
