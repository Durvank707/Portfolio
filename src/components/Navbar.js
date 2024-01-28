import React from 'react'
import "./Navbar.css";
import {Link} from 'react-router-dom'
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

    function clickHandler(){
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
                    <Link to='/' >
                        <li><CiHome /> Home</li>
                    </Link>
                    <Link to='/about'>
                        <li><IoPersonCircleSharp /> About</li>
                    </Link>
                    <Link to='/skills'>
                        <li><RiFileList3Line /> Skills</li>
                    </Link>
                    <Link to='/projects'>
                        <li><GoProjectSymlink /> Projects</li>
                    </Link>
                    <Link to='/contact'>
                        <li><FiSend /> Contact</li>
                    </Link>
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



                