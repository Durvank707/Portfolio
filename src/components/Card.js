import React from 'react'
import './card.css'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Card = ({ image, title, desc, github }) => {
    return (
        <div className='card'>
            <div className='project_img'>
                <img src={image} alt='project' />

                <Link to={github} target='_blank'>
                    <div className='project_gh_icon'>
                        <FaGithub />
                    </div>
                 </Link>

            </div>
            <div className='project_info'>
                <div className='project_desc'>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Card