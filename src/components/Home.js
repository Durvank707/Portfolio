import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineMessage } from 'react-icons/ai';
import './Home.css';

const Home = () => {
    return (
        <section>
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
                    <p>Web Developer</p>
                    <p>I'm a MERN stack developer and I'm very passionate and dedicated to my work</p>

                    <button className='hello-btn'>
                        Say Hello <AiOutlineMessage />
                    </button>
                </div>

                <div className='photo'>
                    <img src='../assets/photo.jpg' alt='myself' />
                </div>
            </div>
        </section>
    );
};

export default Home;
