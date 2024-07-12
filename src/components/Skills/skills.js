import React, { useState } from 'react';
import './skills.css';
import c from '../../assets/c.jpeg';
import cPlus from '../../assets/c++.png';
import cSharp from '../../assets/cSharp.png';
import css from '../../assets/css.png'
import django from '../../assets/django.png'
import dotnet from '../../assets/dotnet.png'
import figma from '../../assets/figma.png'
import html from '../../assets/html.png'
import java from '../../assets/java.jpeg'
import js from '../../assets/js.png'
import junit from '../../assets/junit.png'
import mysql from '../../assets/mysql.png'
import oracle from '../../assets/oracle.png'
import postgres from '../../assets/postgres.png'
import python from '../../assets/python.jpeg'
import react from '../../assets/react.png'
import springboot from '../../assets/springboot.jpeg'
import jira from '../../assets/jira.png'
import confluence from '../../assets/confluence.png'
import jupyter from '../../assets/jupyter.png'
import postman from '../../assets/postman.png'
import eclipse from '../../assets/eclipse.png'
import vs from '../../assets/vs.jpeg'
import vsc from '../../assets/vsc.png'
import swagger from '../../assets/swagger.png'

const Skills = () => {
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isWorkExperienceOpen, setIsWorkExperienceOpen] = useState(false);
  const [isSkillOpen, setIsSkillOpen] = useState(false);

  const toggleEducation = () => setIsEducationOpen(!isEducationOpen);
  const toggleWorkExperience = () => setIsWorkExperienceOpen(!isWorkExperienceOpen);
  const toggleSkill = () => setIsSkillOpen(!isSkillOpen);

  return (
    <section id='skills'>
      <span className="skillTitle">About Me</span>
      <span className="skillDesc">
        Highly skilled software developer with a Master’s in Computer Science (GPA 4.0) from Purdue University and a Bachelor’s from Sathyabama University (GPA 9.31). Experienced Java Developer at Cognizant, specializing in IoT sensor data management for Schneider Electric, improving data processing efficiency by 30%. Proficient in core programming languages, database management, and web development, with a strong focus on performance optimization and cloud deployment. Currently a Graduate Teaching Assistant at Purdue, assisting in software project management and supporting over 50 students.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <span className="sectionTitle" onClick={toggleEducation}>
            Education {isEducationOpen ? '-' : '+'}
          </span>
          {isEducationOpen && (
            <div className="sectionContent">
              <div className='degree'><b>Master's in Computer Science at Purdue University</b></div>
              <span className='year'> 2023 - present </span>
              <span className='gpa'> (GPA: 4.0/4.0) <br /></span>
              <div className='degree'><b>Bachelor's in Computer Science at Sathyabama University</b></div>
              <span className='year'> 2017 - 2021 </span>
              <span className='gpa'> (GPA: 9.31/10.0) <br /></span>
            </div>
          )}
        </div>
        <div className="skillBar">
          <span className="sectionTitle" onClick={toggleWorkExperience}>
            Work Experience {isWorkExperienceOpen ? '-' : '+'}
          </span>
          {isWorkExperienceOpen && (
            <div className="sectionContent">
              <div className='company'><b>COGNIZANT TECHNOLOGY SOLUTIONS</b> <br/> Programmer Analyst <br/>Feb 2021 - Nov 2022</div>
              <br/>
              <div className='occupation'><b>Java Developer</b> in the project <b>"Digital IoT Sensors Cloud Portal"</b> for Schneider Electrics (Canada).</div>
              <ul><br/>
                <li>Developed and maintained Java-based REST APIs (microservices) for real-time sensor data management in smart buildings, improving data processing efficiency by 30%.</li>
                <li>Designed and optimized data models and managed the Postgres database.</li>
                <li>Deployed and managed applications on Azure Cloud, ensuring 99.9% uptime.</li>
                <li>Utilized Spring Tool Suite, Eclipse, Postman, and Swagger for development and API testing.</li>
                <li>Collected and processed real-time data from 100+ sensors across building floors.</li>
                <li>Conducted performance tuning and load testing to handle 1 million data points daily.</li>
                <li>Created API documentation and provided support for deployed solutions.</li>
              </ul>
              <br/>
              <div className='company'><b>HCLTech</b> <br/> System Programming Intern <br/>Jan 2020 - Jul 2020</div>
              <br/>
              <div className='occupation'><b>System Programming Intern</b>at HCLTech</div>
              <ul><br/>
                <li>Assisted in developing and maintaining system-level software components in C/C++, reducing bug incidents by 20%.</li>
                <li>Analyzed system requirements and contributed to the design and implementation of system architecture.</li>
                <li>Identified and resolved performance bottlenecks, optimizing code for efficiency.</li>
                <li>Documented software designs, code, and testing procedures for internal use, enhancing team productivity by 10%.</li>
                <li>Collaborated with cross-functional teams, including hardware engineers and system administrators, facilitating a 30% improvement
in project turnaround time.</li>
                
              </ul>
            </div>
          )}
        </div>
        <div className="skillBar">
          <span className="sectionTitle" onClick={toggleSkill}>
            Skills {isSkillOpen ? '-' : '+'}
          </span>
          {isSkillOpen && (
            <div className="sectionContent">
              <div className='heading'>Programming languages</div>
              <br/>
              <span className='pic'><img src={python} className='pic'></img></span>
              <span className='pic'><img src={java} className='pic'></img></span>
              <span className='pic'><img src={c} className='pic'></img></span>
              <span className='pic'><img src={cPlus} className='pic'></img></span>
              <span className='pic'><img src={cSharp} className='pic'></img></span>
              <span className='pic'><img src={html} className='pic'></img></span>
              <span className='pic'><img src={css} className='pic'></img></span>
              <span className='pic'><img src={js} className='pic'></img></span>
              <span className='pic'><img src={react} className='pic'></img></span>
              <div className='heading'>Databases</div>
              <br/>
              <span className='pic'><img src={postgres} className='pic'></img></span>
              <span className='pic'><img src={oracle} className='dpic'></img></span>
              <span className='pic'><img src={mysql} className='dpic'></img></span>
              <div className='heading'>Frameworks</div>
              <br/>
              <span className='pic'><img src={springboot} className='dpic'></img></span>
              <span className='pic'><img src={dotnet} className='pic'></img></span>
              <span className='pic'><img src={django} className='pic'></img></span>
              <span className='pic'><img src={junit} className='pic'></img></span>
              <div className='heading'>Tools/Platforms</div>
              <br/>
              <span className='pic'><img src={figma} className='pic'></img></span>
              <span className='pic'><img src={jira} className='dpic'></img></span>
              <span className='pic'><img src={eclipse} className='pic'></img></span>
              <span className='pic'><img src={vsc} className='pic'></img></span>
              <span className='pic'><img src={vs} className='pic'></img></span>
              <span className='pic'><img src={confluence} className='dpic'></img></span>
              <span className='pic'><img src={postman} className='pic'></img></span>
              <span className='pic'><img src={swagger} className='pic'></img></span>
              <span className='pic'><img src={jupyter} className='pic'></img></span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;
