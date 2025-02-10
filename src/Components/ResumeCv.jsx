import React from 'react';
import '../Css/Resume.css';

const ResumeCv = () => {
  return (
    <div className="resume">
      <h1>Education</h1>

      <div className="resume-section">
        <h2>Schooling</h2>
        <h3>Abhyas English Medium School, Garividi, Vizianagaram District</h3>
        <p>
          Completed primary and secondary education with a focus on English language proficiency and holistic development.
        </p>
      </div>

      <div className="resume-section">
        <h2>Intermediate Education</h2>
        <h3>Sri Viswa Junior College, Visakhapatnam</h3>
        <p>
          Completed Intermediate education with a specialization in Mathematics, Physics, and Chemistry (MPC), laying the groundwork for advanced studies in engineering and scientific disciplines.
        </p>
      </div>

      <div className="resume-section">
        <h2>Undergraduate Studies</h2>
        <h3>RVR and JC College of Engineering, Guntur</h3>
        <p>
          Currently pursuing a Bachelor's degree in Computer Science and Engineering (CSE), with a passion for exploring innovative technologies and problem-solving methodologies.
        </p>
      </div>

      <p className="resume-summary">
        Each educational institution has contributed significantly to my academic journey, fostering a strong foundation in both theoretical knowledge and practical application. Through diverse experiences and rigorous coursework, I aim to continue evolving as a competent professional in the field of Computer Science and Engineering.
      </p>
    </div>
  );
}

export default ResumeCv;
