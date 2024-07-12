import React from 'react'
import './projects.css'
import github from '../../assets/github.png'
import figma from '../../assets/figma.png'

export const Projects = () => {
  return (
    <section id='projects'>
    <h2 className='projectTitle'> My Projects</h2>
    <span className='projectDesc'>I am dedicated to achieving excellence through a methodical and precise approach to every project. My keen eye for detail and commitment to quality ensure accurate and high-standard results. I excel in problem-solving and consistently strive to exceed expectations, whether working independently or as part of a team.</span>
    <br/>
    <div className='projectList'>
        <div className='projectHeading'>Digital IoT Sensors Cloud Portal
        <div className='projTech'>(Java, Postgres, Azure, Eclipse, Postman, Swagger, JIRA)</div>
        <div className='projectSum'>This Application is a web cloud portal having the data of sensors and their gateways, allowing customers to keep a track on their own sensor data like sensor type, sensor health, battery level, no of sensors connected to a respective gateway and available in the respective building etc through azure cloud platform.</div>
        </div>
        <div className='projectHeading'>Ecommerce Data Analysis Tool
        <div className='projTech'>(C#, MySQL, Visual Studio, Swagger, JIRA)</div>
        <div className='projectSum'>This Application helps managers/sales managers of an E-Commerce Platform to get a data analysis of the sales data of their company like getting the highest sold category, highest sold product, total revenue, average sale etc. It also helps them predict the trend based on the analysis done from past years.</div>
        <div className='image'><img src={github} alt="git" className='github' onClick={() =>{ window.location.href = 'https://github.com/harshitaaAnand-pfw/Ecommerce-Analysis'}}/></div>
        </div>
        <div className='projectHeading'>Heart Disease Prediction
        <div className='projTech'>(C#, MySQL, Visual Studio, Swagger, JIRA)</div>
        <div className='projectSum'>This Application helps in predicting if a person is prone to heart diseases or not by taking input parameters such as age, blood pressure level, sugar level and other important parameters. Also, based on the data collected, analysis is made on which age group is most prone to heart disease.</div>
        <div className='image'><img src={github} alt="git" className='github' onClick={() =>{ window.location.href = 'https://github.com/harshitaaAnand-pfw/Heart-Disease-Prediction'}}/></div>
        </div>
        <div className='projectHeading'>Purdue Student Housing Portal - Starrez
        <div className='projTech'>(Figma)</div>
        <div className='projectSum'>Redesigned the Starrez application for student residents on campus using Figma.</div>
        <div className='image'><img src={figma} alt="git" className='github' onClick={() =>{ window.location.href = 'https://www.figma.com/file/rw4M0pGCz8JxjcPpkX98HJ/Purdue-student-housing?type=design&node-id=0-1&mode=design&t=WuNK1ty2e0XGd5Ib-0'}}/></div>
        </div>
        <div className='projectHeading'>EventFlow - Event Management Tool
        <div className='projTech'>(Java, Postgres, Eclipse, Postman, Reactjs, Visual Studio Code, JIRA)</div>
        <div className='projectSum'>An event management application using React.js and Java Springboot</div>
        <div className='image'><img src={github} alt="git" className='github' onClick={() =>{ window.location.href = 'https://github.com/harshitaaAnand-pfw/EventFlow---Event-Management-Tool'}}/></div>
        </div>
        <div className='projectHeading'>Online Shopping Price Tracker
        <div className='projTech'>(Python)</div>
        <div className='projectSum'>This Application alerts the user through the provided email of the user when the price of the product the user wants to purchase drops on the online shopping platform.</div>
        <div className='image'><img src={github} alt="git" className='github' onClick={() =>{ window.location.href = 'https://github.com/harshitaaAnand-pfw/Ecommerce-Analysis'}}/></div>
        </div>

    </div>
    <br/>
    <button className="more" onClick={() =>{ window.location.href = 'https://github.com/harshitaaAnand-pfw/'}}>
                See More
            </button>
    </section>
  )
}

export default Projects;