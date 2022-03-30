import './Hero.scss';
import React from 'react'
import {Link} from 'react-scroll';
import { useGifFetch } from '../../utils/useGifFetch';

export const Hero = () => {

  const heroGif='da0NgyClHpA4jqUoav', heroClassName='heroGif', heroWidth=250, heroBorderRadius=6

  return (
    <section id='hero'>
        <div className='heroTitleWrapper'>
            <h2 className='heroTitle'>
                Who?
            </h2>
            <div className='hideHeroGif'>
                {useGifFetch(heroGif, heroClassName, heroWidth, heroBorderRadius)}
            </div>
        </div>
        <div className='heroWrapper'>
            <h3 className='heroSubTitle'>I’m Ignacio Gavilanes <span className='wave'>👋🏼</span></h3>
            <p className='heroInfo'>a self-taught,<span className='heroHighlighted'> —hopefully soon-to-be—</span>, web developer. You can either keep scrolling to learn more about me or you can go straight to my</p>
            <Link to='education' smooth={true} duration={1500}><button id='cta'>Education</button></Link>
        </div>

    </section>
  )
}
