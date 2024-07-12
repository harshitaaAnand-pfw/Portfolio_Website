import React, { useState }from 'react'
import './achivements.css'


export const Achivements = () => {
    const [tflipped, setTFlipped] = useState(false);
    const [rflipped, setRFlipped] = useState(false);
    const [sflipped, setSFlipped] = useState(false);
    const [cflipped, setCFlipped] = useState(false);
    const [lflipped, setLFlipped] = useState(false);

  const thandleFlip = () => {
    setTFlipped(!tflipped);
  };
  const rhandleFlip = () => {
    setRFlipped(!rflipped);
  };
  const shandleFlip = () => {
    setSFlipped(!sflipped);
  };
  const chandleFlip = () => {
    setCFlipped(!cflipped);
  };
  const lhandleFlip = () => {
    setLFlipped(!lflipped);
  };
  return (
    <section id='achivements'>
        <h2 className='achTitle'>My Achievements</h2>
        <div className='achDesc'>
I attribute my achievements to my proficiency in key soft skills, including leadership, communication, presentation, active listening, interpersonal skills,  problem-solving, hardwork, dedication creativity, public speaking, prompt thinking, innovation, teamwork, and empathy. These skills have been instrumental in my success and recognition in various endeavors.<br/>
<u><h1>Click on each card to know more...</h1></u></div>
    <div className='achieve-container'>
        <div className={`ach ${tflipped ? 'flipped' : ''}`} onClick={thandleFlip}>
            <div className='ach-content'>
                <div className='ach-front'>Graduate Teaching Assistant (TA)</div>
                <div className='ach-back'>
                    <ul>
                        <li>Coordinated assessment tools creation, including quizzes, exams, and project evaluation criteria.</li>
                        <li>Evaluated assignments, projects, and exams, providing constructive feedback to students.</li>
                        <li>Assisted students in understanding project requirements, objectives, and best practices.</li>
                        <li>Offered technical support related to software tools or platforms and assisted in coding.</li>
                        <li>Kept abreast of industry trends and updates in software project management.</li>
                    </ul></div></div></div>
            <div className={`ach ${rflipped ? 'flipped' : ''}`} onClick={rhandleFlip}>   
            <div className='ach-content'>
                <div className='ach-front'>Resident Assistant (RA)</div>
                <div className='ach-back'>
                    <ul>
                        <li>Help residents with questions, concerns, and conflicts.</li>
                        <li>Organize and promote community-building activities and events.</li>
                        <li>Enforce residence hall policies and regulations.</li>
                        <li>Serve as a point of contact for emergency situations.</li>
                        <li>Facilitate communication between residents and residence hall staff.</li>
                        <li>Be a resource for information about campus services and resources</li>
                    </ul></div></div></div>
            <div className={`ach ${sflipped ? 'flipped' : ''}`} onClick={shandleFlip}>
            <div className='ach-content'>
                <div className='ach-front'>Student Admissions Representative (STAR)</div>
                <div className='ach-back'>
                    <ul>
                        <li>Help residents with questions, concerns, and conflicts.Work closely with the Office of Admissions in promotion and recruitment.</li>
                        <li>Give daily campus and student housing tours.</li>
                        <li>Support the Admissions team at large event days.</li>
                    </ul></div></div></div>
            <div className={`ach ${cflipped ? 'flipped' : ''}`} onClick={chandleFlip}>        
            <div className='ach-content'>
                <div className='ach-front'>Class Ambassador (CA)</div>
                <div className='ach-back'>
                    <ul>
                        <li>Receiving the title for topping in every semester during my Bachelor's degree, Maintaining the highest grades and standing out academically.</li>
                        <li>Leading my group effectively for all 8 semesters.</li>
                        <li>Facilitating communication between students and faculty.</li>
                        <li>Organizing and coordinating group projects and presentations.</li>
                        <li>Representing my class at departmental meetings and events.</li>
                        <li>Ensuring my group met academic and project deadlines.</li>
                        <li>Providing support and guidance to classmates.</li>
                        <li>Encouraging teamwork and collaboration within the group.</li>
                    </ul></div></div></div>
            <div className={`ach ${lflipped ? 'flipped' : ''}`} onClick={lhandleFlip}>
                <div className='ach-content'>
                <div className='ach-front'>Lead Talk</div>
                <div className='ach-back'>
                    <ul>
                        <li>Presenting a lead talk (seminar) to my juniors, reaching an audience of approximately 500 students.</li>
                        <li>Sharing valuable insights and knowledge to help guide and inspire the next generation of students.</li>
                        <li>Preparing comprehensive and engaging content to ensure the seminar was informative and impactful.</li>
                        <li>Answering questions and facilitating discussions to enhance understanding and engagement.</li>
                        <li>Demonstrating confidence and effective communication skills in a large-scale setting of about 300 students.</li>
        
                    </ul></div></div></div>
                    </div>
            
        
    </section>
  )
}

export default Achivements;
