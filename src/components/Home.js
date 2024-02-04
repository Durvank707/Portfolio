import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import './Home.css';
import CV from "../assets/Resume.pdf"
import { MdOutlineFileDownload } from "react-icons/md";

const Home = () => {
    return (
        <section className='container'>
            <div className='home'>
                <div className='social'>
                    <Link to='https://www.instagram.com/7.r_durvank' target='_blank'>
                        <FaInstagram />
                    </Link>
                     <Link to='https://www.linkedin.com/in/durvank-jagtap-b288b2231' target='_blank'>
                        <FaLinkedin />
                    </Link>
                    <Link to='https://github.com/Durvank707' target='_blank'>
                        <FaGithub />
                    </Link>
                </div>

                <div className='info'>
                    <h1>Durvank Jagtap</h1>
                    <p className='subTitle'>Web Developer</p>
                    <p className='description'>I'm a MERN stack developer and I'm very passionate and dedicated to my work</p>

                    <div className='about_atag'>
                        <a download="Resume" href={CV}>Download CV <span><MdOutlineFileDownload /></span></a>
                    </div>
                </div>

                <div className='photo'>
                    <img src='../assets/photo.jpg' alt='myself' />
                </div>
            </div>
        </section>
    );
};

export default Home;
