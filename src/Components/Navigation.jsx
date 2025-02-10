import React, { useState } from 'react';
import '../Css/Navigation.css';
import twitter from '../Logos/pngwing.com (5).png';
import facebook from '../Logos/pngwing.com (6).png';
import instagram from '../Logos/pngwing.com (7).png';
import linkedin from '../Logos/pngwing.com (8).png';
import youtube from '../Logos/pngwing.com (9).png';
import my_profile from '../Logos/my_profile.jpg';

const Navigation = ({ isVisible, onItemClick }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (className) => {
    setActiveItem(className);
    const section = document.querySelector(`.${className}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    onItemClick();
  };

  return (
    <div className={`navigation ${isVisible ? 'visible' : ''}`}>
      {/* Cross button for smaller screens */}
      <div className="cross-button" onClick={onItemClick}>
        &times;
      </div>
      <img src={my_profile} alt='myimage' className='profile' />
      <div><h2>Durga Prasad</h2></div>
      <div className='mediaicons'>
        <div onClick={() => window.open("https://x.com/j_durga_prasad?t=dwzYU1U1-CEXis-QWG-lZg&s=08", "_blank")} style={{ cursor: "pointer" }}><img src={twitter} alt='twitter'/></div>
        <div onClick={() => window.open("https://www.facebook.com/profile.php?id=100016757598944", "_blank")} style={{ cursor: "pointer" }}><img src={facebook} alt='facebook'/></div>
        <div onClick={() => window.open("https://www.instagram.com/durgaprasadjammu?igsh=cnc3aThtM20zeXZk", "_blank")} style={{ cursor: "pointer" }}><img src={instagram} alt='instagram'/></div>
        <div onClick={() => window.open("https://www.linkedin.com/in/durga-prasad-10541a26b/", "_blank")} style={{ cursor: "pointer" }}><img src={linkedin} alt='linkedin'/></div>
        <div onClick={() => window.open("https://www.youtube.com/", "_blank")} style={{ cursor: "pointer" }}><img src={youtube} alt='youtube'/></div>
      </div>
      <ul className='links'>
        <li
          className={activeItem === 'about' ? 'active' : ''}
          onClick={() => handleItemClick('about')}><h4>About</h4></li>
        <li
          className={activeItem === 'resume' ? 'active' : ''}
          onClick={() => handleItemClick('resume')}><h4>Education</h4></li>
        <li
          className={activeItem === 'internship' ? 'active' : ''}
          onClick={() => handleItemClick('internship')}><h4>Internship</h4></li>
        <li
          className={activeItem === 'certifications' ? 'active' : ''}
          onClick={() => handleItemClick('certifications')}><h4>Certifications</h4></li>
        <li
          className={activeItem === 'projects' ? 'active' : ''}
          onClick={() => handleItemClick('projects')}><h4>Projects & Work Samples</h4></li>
        <li
          className={activeItem === 'skills' ? 'active' : ''}
          onClick={() => handleItemClick('skills')}><h4>Skills</h4></li>
        <li
          className={activeItem === 'contact-container' ? 'active' : ''}
          onClick={() => handleItemClick('contact-container')}><h4>Contact Information</h4></li>
      </ul>
    </div>
  );
};

export default Navigation;