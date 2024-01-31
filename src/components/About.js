import React from 'react'
import "./about.css"
import CV from "../assets/Resume.pdf"
import { MdOutlineFileDownload } from "react-icons/md";

const About = () => {
    return (
        <section className='about_section' id='About'>
            <div className='about'>
                <div className='about_me'>
                    <h1>About Me</h1>
                    <p>My Introduction</p>
                </div>
                <div className='about_content'>
                    <div className='about_photo'>
                        <img src='../assets/photo.jpg' alt='myself' />
                    </div>
                    <div className='about_info'>
                        <p>MERN Stack Developer. I develop websites using ReactJs. I use nodeJs and expressJs for the backend and mongoDB or SQL for database management. I am also utilizing my time in learning more about web development.</p>

                        <div className='about_atag'>
                            <a download="Resume" href={CV}>Download CV <span><MdOutlineFileDownload /></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About