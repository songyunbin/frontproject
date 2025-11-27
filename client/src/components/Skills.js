import '../styles/skills.css';

function Skills() {
  const skills = [
    { name: 'React', level: 80, color: '#3b82f6' },
    { name: 'Node.js', level: 70, color: '#10b981' },
    { name: 'JavaScript', level: 70, color: '#f59e0b' },
    { name: 'HTML/CSS', level: 70, color: '#f97316' },
    { name: 'SpringBoot', level: 60, color: '#6b7280' },
    { name: 'Flutter', level: 80, color: '#059669' },
  ];

  return (
    <section id="skills" className="section section-gray">
      <div className="container">
        <div className="fade-in-scroll">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
