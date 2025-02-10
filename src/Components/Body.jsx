import React from 'react'
import '../Css/Body.css'
import About from './About'
import ResumeCv from './ResumeCv'
import Internship from './Internship'
import Certifications from './Certifications'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import Copyright from './Copyright1'

const Body = () => {
  return (
    <div className='mainbody'>
      <div className='myimgbg'>
        <h1 className='head1'>Durga Prasad</h1>
        <h3 className='head2'>I'm WebDeveloper</h3>
      </div>
      <About/>
      <ResumeCv/>
      <Internship/>
      <Certifications/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Copyright/>
    </div>
  )
}

export default Body