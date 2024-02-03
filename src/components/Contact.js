import React from 'react'
import "./contact.css"
import { FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router-dom'
import { IoIosSend } from "react-icons/io";

const Contact = () => {
    return (
        <section id='contact' className='contact_section'>
            <div className='contact_container'>
                <div className='contact_info'>
                    <h1>
                        Contact Me
                    </h1>
                    <p>
                        I am excited to connect with you! Whether you have questions, project inquiries, or just want to say hello, feel free to reach out. I am available through the contact form, or you can drop me an email at durvankjagtap707@gmail.com or can message me at Linkedin. Let's discuss how we can collaborate and bring your ideas to life. Looking forward to hearing from you!
                    </p>
                    <div className='contact_icon'>
                        <Link to='https://www.linkedin.com/in/durvank-jagtap-b288b2231' target='_blank'>
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
                <div className='contact_form'>
                    <form className='form'>
                        <div className='contact_label'>
                            <label htmlFor='name' className='label'> Name</label>
                            <input type='text' name='name' id='name' placeholder='Name' required />
                        </div>
                        <div className='contact_label'>
                            <label htmlFor='email' className='label'> Email</label>
                            <input type='email' name='email' id='email' placeholder='Email' required />
                        </div>
                        <div className='contact_label'>
                            <label htmlFor='message' className='label'>Your Message...</label>
                            <textarea id='message' cols="30" rows='10' name='message' placeholder='Your message...' required></textarea>
                        </div>
                        <div>
                            <button className='contact_button'>
                                Send Message <IoIosSend />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact