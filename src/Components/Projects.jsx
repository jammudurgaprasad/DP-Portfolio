import React from 'react';
import '../Css/Projects.css';
import github from '../Logos/github.png';
import browser from '../Logos/browser.png'
import dpkitchen from '../Certificates&Projects/dpskitchen.jpg'
import rockpaperscissor from '../Certificates&Projects/rockpaperscissor.png'
import bill from '../Certificates&Projects/BillGenerator.png'
import calculator from '../Certificates&Projects/calculator.png'
import fest from '../Certificates&Projects/Fest.png'
import todo from '../Certificates&Projects/ToDo.png'

const Projects = () => {
  const certificates = [
    {
      type: "Project",
      technologies:" HTML, CSS, JS, MySQL, Django",
      title: "Online food ordering system",
      image: dpkitchen,
      git:"https://github.com/jammudurgaprasad/project4",
      browse:"https://www.google.co.in/",
    },
    {
      type: "Task",
      technologies:" HTML, CSS, JS",
      title: "Bill Generator",
      image: bill,
      git:"https://github.com/jammudurgaprasad/projects/blob/main/bill.html",
      browse:"https://jdp62.netlify.app/bill.html",
    },
    {
      type: "Project",
      technologies:" HTML, CSS, JS",
      title: "ROCK-PAPER-SCISSOR Game",
      image: rockpaperscissor,
      browse:"https://dp-rock-paper-scissor.netlify.app/",
    },
    {
      type: "Task",
      technologies:" HTML, CSS, JS",
      title: "Simple Calculator",
      image: calculator,
      git:"https://github.com/jammudurgaprasad/projects/blob/main/calculator.html",
      browse:"https://jdp62.netlify.app/calculator.html",
    },
    {
      type: "Project",
      technologies:" HTML, CSS, JS",
      title: "College Cultural Fest Website",
      image: fest,
      git:"https://github.com/jammudurgaprasad/college_cultural_fest_website",
    },
    {
      type: "Project",
      technologies:" React Js, Node Js, MongoDB, CSS,",
      title: "To-Do Application",
      image: todo,
      git:"https://github.com/jammudurgaprasad/Full-Stack-ToDo-App",
    },
  ]

  return (
    <div className='projects'>
        <h1>Projects & Work Samples</h1>


        <div className='certificate-container'>
          {certificates.map((item, index) => (
            <div key={index} className='certificate-card'>
              <div className="certificate-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="certificate-details">
                <h4><strong style={{color:"blue"}}>{item.type} : </strong>{item.title}</h4>
                <h4><strong style={{color:"blue"}}>🌐 : </strong>{item.technologies}</h4>
                <div className='onlinelinks'>
                  {item.git && (
                    <div>
                      <img 
                        src={github} 
                        alt='GitHub Link' 
                        onClick={() => window.open(item.git, "_blank")} 
                      />
                    </div>
                  )}
                  {item.browse && (
                    <div>
                      <img 
                        src={browser} 
                        alt='GitHub Link' 
                        onClick={() => window.open(item.git, "_blank")} 
                      />
                    </div>
                  )}  
                </div>            
                
              </div>
            </div>
          ))}
        </div>


    </div>
  )
}

export default Projects