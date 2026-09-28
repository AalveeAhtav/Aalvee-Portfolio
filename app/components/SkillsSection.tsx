const groups = [
  { number: '01', name: 'Languages', skills: ['Java', 'Python', 'C / C++', 'JavaScript', 'TypeScript'] },
  { number: '02', name: 'Web & applications', skills: ['React', 'React Native', 'Next.js', 'Node.js', 'Express.js', 'HTML / CSS', 'Zod'] },
  { number: '03', name: 'Data & infrastructure', skills: ['Azure Cosmos DB', 'MongoDB', 'MySQL', 'AWS', 'Linux', 'CI / CD'] },
  { number: '04', name: 'Developer toolkit', skills: ['Git', 'GitHub', 'Postman', 'Jest', 'Playwright', 'SonarQube'] },
];
export default function SkillsSection() {
  return <section id="skills" className="skills-section section-border" aria-labelledby="skills-title"><div className="container">
    <div className="skills-heading"><div><p className="eyebrow"><span className="section-number">04</span> UNDER THE HOOD</p><h2 id="skills-title">The engineering toolkit<span className="blue-period">.</span></h2></div><p>The right tools.<br />A thoughtful approach.</p></div>
    <div className="skills-grid">{groups.map(group => <div className="skill-group" key={group.name}><span className="skill-number">/{group.number}</span><h3>{group.name}</h3><ul>{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div>
  </div></section>;
}
