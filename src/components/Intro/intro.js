import React from 'react';
import './intro.css';
import profile from '../../assets/pp.jpeg'
import {Link} from 'react-scroll';
import hire from '../../assets/hire.png'


const Intro = () => {
  return (
    <section id= "intro">
        <div className='introContent'>
            <span className="hello">Hello!</span>
            <span className="introText"> I'm <span className="introName">Harshitaa</span></span>
            <p className="introPara">I am a passionate software developer with a Master's in <br/>Computer Science from Purdue University, specializing in developing<br/> and optimizing software applications.</p>
            <Link><button className = "btn" onClick={() =>{
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}><img src={hire} alt="Hire" className='hire'/>Hire Me</button></Link>
        </div>
        <img src={profile} alt="Profile" class="bg"/>
    </section>
  )
}

export default Intro