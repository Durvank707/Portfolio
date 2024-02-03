import React from 'react'
import data from './data.js';
import Card from './Card.js';
import './projects.css'

const Projects = () => {
    return (
        <section id='project'>
            <div className='project_container'>
                <div className='project_title'>
                    <h1>Projects</h1>
                </div>
                <div className='card_container'>
                    {
                        data.map((data) => {
                            return <Card key={data.id} title={data.title} desc={data.desc} image={data.image} github={data.github} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects