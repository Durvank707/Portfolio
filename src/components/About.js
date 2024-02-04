import React, { useState } from 'react'
import "./about.css"
import { FaGraduationCap } from "react-icons/fa6";

const About = () => {
    
    const[option, setOption] = useState('true');

    function buttonHandler1() {
        setOption(true);
    }

    function buttonHandler2() {
        setOption(false);
    }
    
    return (
        <section className='about_section' id='About'>
            <div className='about'>
                <div className='about_me'>
                    <h1>About Me</h1>
                    <div className='about_button'>
                        <button className={option ? 'about_btn intro' : 'about_btn introno'} onClick={buttonHandler1}>
                            My Introduction
                        </button>
                        <button className= {option ? 'about_btn edu eduno' : 'about_btn edu'} onClick={buttonHandler2}>
                            Education
                        </button>
                    </div>
                </div>
                <div className='about_content'>
                     <div className='about_photo'>
                        <img src='../assets/photo.jpg' alt='myself' />
                    </div>
                    <div className={option ? 'my_itro about_info' : 'my_intro_none'}>
                        <p>I am Durvank Avinash Jagtap. MERN Stack Developer. I develop websites using ReactJs. I use nodeJs and expressJs for the backend and mongoDB or SQL for database management. I am also utilizing my time in learning more about web development.</p>
                    </div>
                    <div className={option ? 'my_edu_none about_info' : 'my_edu about_info'}>
                        <span className='about_span'><FaGraduationCap /> Graduation</span><br></br><span className='institute_name'>Dr. D. Y. Patil College of Engineering, Akurdi</span>
                        <br></br>
                        <br></br>
                        <br></br>
                        <span className='about_span'><FaGraduationCap /> Higher Secondary Education</span><br></br>
                        <span className='institute_name'>Chaitanya's International School, Baramti</span>
                        <br></br><br></br><br></br>
                        <span className='about_span'><FaGraduationCap /> Primary and Secondary Education</span><br></br>
                        <span className='institute_name'>Vidya Pratisthan's Someshwar English Medium School, <span className='institute_name'>Waghalwadi</span></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About