import './Contact.scss'
import {BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import React, {useEffect, useRef} from 'react'
import CircleType from "circletype";
import { useGifFetch } from '../../utils/useGifFetch';


export const Contact = () => {
    const circleInstance = useRef();

    useEffect(() => {
        new CircleType(circleInstance.current).radius(4);
    }, []);

    const contactGif = 'lpnJDo7ExzUymI3JEv', contactClassName='contactGif', contactWidth = 300,  contactBorderRadius = 6;

    function handleSubmit(e) {
        e.preventDefault();
    } //Prevents refreshing website after submitting form (default behavior), which would break SPA flow.

    return (
        <section id='contact'>
            <div className='contactTitleWrapper'>
                <h2 className='contactTitle'>
                    Say Hi!
                </h2>
                <div className='hideContactGif'>
                    {useGifFetch(contactGif, contactClassName, contactWidth, contactBorderRadius)}
                </div>
            </div>

            <div id='contactContainer'>

                <div id='contactSubContainer'>
                    <p className='contactInfo'>
                        Got any questions? Suggestions? Advice? 
                        You can reach me out completing the form below 👇🏼
                    </p>
                
                    <div className='contactWrapper'>
                        <div className='formWrapper'>
                            <form id='contactForm' name="contact" method="POST" data-netlify="true" autoComplete='off' onSubmit={handleSubmit}>
                                <div className='dataWrapper'>
                                    <label className='label' htmlFor='name' >Name</label>
                                    <input id='name' name='name' type='text'/>

                                    <label className='label' htmlFor='email'>Email</label>
                                    <input id='email' name='email' type='text'/>
                                </div>
                                <div className='messageWrapper'>
                                    <label className='label' htmlFor='message'>Message</label>
                                    <textarea id='message' name='message' type='text'/>
                                </div>

                                <div className='buttonsWrapper'>
                                    <button id='submit' type="submit">Send</button> {/* NEED TO PREVENT DEFAULT SO THAT I DON'T INTERRUPT SPA (FORCE REFRESH) */}
                                    <div className='contactIconsWrapper'>
                                        <a href="https://www.linkedin.com/in/ignacio-gavilanes/" rel="noreferrer" target="_blank"><FaLinkedinIn className='contactIcon'/></a>
                                        <a href="https://www.github.com/ignaciogavilanes" rel="noreferrer" target="_blank"><BsGithub className='contactIcon'/></a>
                                    </div>
                                </div>

                                <div className='myEmailWrapper'>
                                    
                                    <p className='clipboardInfo'>**You can also reach me at: </p>
                                    <div className='clipboard'>
                                        <p className='myEmail'>gavilanesignacio@gmail.com</p>
                                        <MdContentCopy className='myEmailIcon' onClick={() => {navigator.clipboard.writeText("gavilanesignacio@gmail.com")}} />
                                    </div>
                                </div>
                                    
                            </form>
                        </div>

                        {/* <div className='circularTextWrapper'>
                            <div ref={circleInstance} id='circle'>THANK YOU!•</div>
                        </div> */}
                    </div>
                </div>

                <div className='circularTextWrapper'> 
                    <div ref={circleInstance} id='circle'>THANK YOU!•</div>
                </div>
            </div>
        </section>
    )
}
