import React from 'react';
import '../Css/Certifications.css';
import nptel from '../Certificates&Projects/NPTEL.jpeg';
import python from '../Certificates&Projects/Python.png';
import javascript from '../Certificates&Projects/JavaScript.jpeg'

const Certifications = () => {
  const certificates = [
    {
      platform: "SCALAR TOPICS",
      title: "Python course for beginners",
      image: python,
      url:"https://moonshot.scaler.com/s/sl/8NXzCuW2x2?_gl=1*cdodp4*FPAU*OTg2MDQ0MTM2LjE3MzYyNDM4OTU.*_ga*MTE5MzU0Mzc2MC4xNzM2MjQzODk2*_ga_53S71ZZG1X*MTczOTIwNTU3MC41LjEuMTczOTIwNTY1Ny4wLjAuMTg1MDA2MjIxNQ..",
    },
    {
      platform: "NPTEL",
      title: "DSA using Java",
      image: nptel,
      url:"https://www.linkedin.com/posts/jammudurgaprasad_nptel-learningjourney-datastructures-activity-7288578996412334080-YNhi?utm_source=share&utm_medium=member_desktop",

    },
    {
      platform: "SCALAR TOPICS",
      title: "JavaScript",
      image: javascript,
      url:"https://moonshot.scaler.com/s/sl/M3YPETr0jK?_gl=1*1wl0lii*FPAU*OTg2MDQ0MTM2LjE3MzYyNDM4OTU.*_ga*MTE5MzU0Mzc2MC4xNzM2MjQzODk2*_ga_53S71ZZG1X*MTczOTIwNTU3MC41LjEuMTczOTIwNTY1Ny4wLjAuMTg1MDA2MjIxNQ..",

    },
    
  ];

  return (
    <div className="certifications">
      <h1>Certifications</h1>

      <div className='certificates'>
        
          {certificates.map((item,index) => (
            <div key={index} className='d1'>
              <div class="c1">
                <img src={item.image} alt={item.title} />
              </div>
              <div class="e1">
                <h4><strong style={{color:"blue"}}>Platform : </strong>{item.platform}</h4>
                <h5>{item.title}</h5>
                <button onClick={() => window.open(item.url, "_blank")} style={{ cursor: "pointer" }}><strong>Certificate</strong></button>
              </div>
            </div>
          ))}
        
      </div>
    </div>
  );
};

export default Certifications;
