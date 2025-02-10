import React from 'react';
import '../Css/Skills.css';

const skills = {
  "Programming Languages": [
    { name: "Python", level: 70 },
    { name: "Java", level: 50 },
    { name: "JavaScript", level: 50 },
  ],
  "Frameworks & Libraries": [
    { name: "React", level: 75 },
    { name: "Django", level: 60 },
    { name: "Node.js", level: 75 },
  ],
  "Web Technologies": [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 80 },
    { name: "MongoDB", level: 60 },
  ],
  "Development Tools": ["VS Code", "NetBeans IDE", "Postman"]
};

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>

      {/* First row */}
      <div className="skills-row">
        {["Programming Languages", "Frameworks & Libraries"].map((category, index) => (
          <div key={index} className="skill-category">
            <h2>{category}</h2>
            {skills[category].map((skill, idx) => (
              <div key={idx} className="skill">
                <div className="skill-name">
                  <h4>{skill.name}</h4>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Second row */}
      <div className="skills-row">
        {["Web Technologies", "Development Tools"].map((category, index) => (
          <div key={index} className="skill-category">
            <h2>{category}</h2>
            {category === "Development Tools" ? (
              <ul className="tools-list">
                {skills[category].map((tool, idx) => (
                  <li key={idx}>{tool}</li>
                ))}
              </ul>
            ) : (
              skills[category].map((skill, idx) => (
                <div key={idx} className="skill">
                  <div className="skill-name">
                    <h4>{skill.name}</h4>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
