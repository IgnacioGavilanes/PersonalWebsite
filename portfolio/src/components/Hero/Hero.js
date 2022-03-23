import './Hero.scss';
import React from 'react'
import {Link} from 'react-scroll';

export const Hero = () => {
  return (
    <section id='hero'>
        <div className='heroTitleWrapper'>
            <h2 className='heroTitle'>
                Who?
            </h2>
        </div>
        <div className='heroWrapper'>
            <h3 className='heroSubTitle'>I’m Ignacio Gavilanes <span className='wave'>👋🏼</span></h3>
            <p className='heroInfo'>a self-taught,<span className='heroHighlighted'> —hopefully soon-to-be—</span>, web developer. You can either keep scrolling to learn more about me or you can go straight to my</p>
            <Link to='education' smooth={true} duration={1500}><button id='cta'>Education</button></Link>
        </div>

    </section>
  )
}
