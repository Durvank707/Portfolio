import React from 'react'
import "./Navbar.css";
import { Link } from 'react-scroll'
import { CiHome } from "react-icons/ci";
import { IoPersonCircleSharp } from "react-icons/io5";
import { RiFileList3Line } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { FiSend } from "react-icons/fi";
import { TiThMenuOutline } from "react-icons/ti";
import { MdClose } from "react-icons/md";
import { useState } from 'react';

const Navbar = () => {

    const [click, setClick] = useState('false');

    function clickHandler() {
        setClick(!click);
    }

    return (
        <div>
            <nav className='navbar'>
                <div className='nav-logo'>
                    <Link to="/" className='logo'>
                        <h2>DURVANK</h2>
                    </Link>
                </div>
                <div className={click ? 'nav-comp' : 'nav-comp active'}>
                    <ul>

                        <li>
                            <Link to="home" smooth={true} offset={0} duration={700}><span className='icon'><CiHome /></span> <span className='title'> Home</span></Link>
                        </li>


                        <li>
                            <Link to="about" smooth={true} offset={-150} duration={700}><span className='icon'><IoPersonCircleSharp /></span><span className='title'> About</span></Link>
                        </li>

                        <li>
                            <Link to="skills" smooth={true} offset={0} duration={700}><span className='icon'><RiFileList3Line /></span> <span className='title'> Skills</span></Link>
                        </li>

                        <li>
                            <Link to="project" smooth={true} offset={-120} duration={700}><span className='icon'><GoProjectSymlink /></span> <span className='title'> Project</span></Link>
                        </li>

                        <li>
                            <Link to="contact" smooth={true} offset={0} duration={700}><span className='icon'><FiSend /></span> <span className='title'> Contact</span></Link>
                        </li>
                    </ul>
                </div>

                <div className='ham' onClick={clickHandler}>
                    {
                        click ? <TiThMenuOutline /> : <MdClose />
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar