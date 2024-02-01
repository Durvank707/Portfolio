import React from 'react'
import "./skills.css"
import { FaCheck } from "react-icons/fa";

const Skills = () => {
    return (
        <section>
            <div className='skills'>
                <div className='skills_title'>
                    <h1>Skills</h1>
                </div>
                <div className='skills_container'>
                    <div className='lang content'>
                        <div className='lang_title'>
                            <h1>Programing Language</h1>
                        </div>
                        <div>
                            <p><FaCheck />C++</p>
                            <p><FaCheck />Java</p>
                            <p><FaCheck />Python (Basic)</p>
                        </div>
                    </div>
                    <div className='frontend content'>
                        <div>
                            <h1>Frontend</h1>
                        </div>
                        <div>
                            <div>
                                <p><FaCheck />HTML</p>
                                <p><FaCheck />CSS</p>
                                <p><FaCheck />Tailwind</p>
                                <p><FaCheck />Javascript</p>
                                <p><FaCheck />React</p>
                            </div>
                        </div>
                    </div>
                    <div className='backend content'>
                        <div>
                            <h1>Backend</h1>
                        </div>
                        <div>
                            <div>
                                <p><FaCheck />NodeJs</p>
                                <p><FaCheck />ExpressJs</p>
                                <p><FaCheck />SQL</p>
                                <p><FaCheck />MongoDB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills