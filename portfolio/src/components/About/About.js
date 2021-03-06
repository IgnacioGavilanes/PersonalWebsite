import './About.scss';
import React from 'react'
//testing below:
import { useGifFetch } from '../../utils/useGifFetch';
import { Cloud} from "react-icon-cloud";

export const About = () => {
    const props = {
        options:{
          clickToFront: 500,
          initial: [0.1, -0.1],
          reverse: true,
          wheelZoom: false,
          dragControl:true,
          dragThreshold:1,
          textFont:"Helvetica, Arial, sans-serif",
          textHeight:40,
          outlineColour: '#0000'
        },
        containerProps:{
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            height: '100%',
            // padding: 30
          }
        }
      }

    // id, className, width, borderRadius
    const aboutGif = '2FayYXU90QS9MmAIo', aboutClassName='aboutGif', aboutWidth = 300,  aboutBorderRadius = 6;
    
  return (
    <section id='about'>
         <div className='aboutTitleWrapper'>
            <h2 className='aboutTitle'>
                About.
            </h2>
            <div className='hideAboutGif'>
                {useGifFetch(aboutGif, aboutClassName, aboutWidth, aboutBorderRadius)}
            </div>
        </div>
        
        <div className='aboutContainer'>
            <div className='aboutWrapper'>
                <p className='aboutInfo1'>It is kind of hard to tell you more about me without taking too much 
                    of your time so, here, these are some random things I like:
                </p>

                {/* <div className='hobbiesWrapper'>
                    <ul className='hobbiesCol1'>
                        <li>Videogames 🎮️</li>
                        <li>Working out 💪🏼</li>
                        <li>Coffee ☕</li>
                        <li>Football ⚽️ </li>
                        <li>Buying clothes 👞🤦🏻</li>
                    </ul>
                    <ul className='hobbiesCol2'>
                        <li>Riding my bike 🚴🏼‍♂️</li>
                        <li>Board games 🎲</li>
                        <li>Making playlists 🎧️ </li>
                        <li>Movies🍿 </li>
                        <li>Traveling ✈</li>
                    </ul>
                </div> */}

                <p className='aboutInfo2'>After graduating highschool in Uruguay 🇺🇾 (my homecountry), I took off to the USA 🇺🇸 
                    where I decided to go to college and major in biochemistry 🧑🏻‍🔬‍🔬 Half way through my career I started programming 
                    as a hobbie 👨🏻‍💻 <br/><br/>
                    After graduating and getting back home, I got a 6-month research contract job in neuroscience. After these 6 months
                    were up, I decided I wanted to pursue a career in development, so I started to take courses to level up...
                </p>
            </div>
            <Cloud id='cloud' containerProps={props.containerProps} options={props.options}>
                <a onClick={(e) => e.preventDefault()}>Videogames <span role="img" aria-label='emoji'>🎮️</span></a>
                <a onClick={(e) => e.preventDefault()}>Working out <span role="img" aria-label='emoji'>💪🏼</span></a>
                <a onClick={(e) => e.preventDefault()}>Coffee <span role="img" aria-label='emoji'>☕️</span></a>
                <a onClick={(e) => e.preventDefault()}>Football <span role="img" aria-label='emoji'>⚽️ </span></a>
                <a onClick={(e) => e.preventDefault()}>Buying clothes <span role="img" aria-label='emoji'>👞🤦🏻</span></a>
                <a onClick={(e) => e.preventDefault()}>Riding my bike <span role="img" aria-label='emoji'>🚴🏼‍♂️</span></a>
                <a onClick={(e) => e.preventDefault()}>Board games <span role="img" aria-label='emoji'>🎲</span></a>
                <a onClick={(e) => e.preventDefault()}>Making playlists <span role="img" aria-label='emoji'>🎧</span></a>
                <a onClick={(e) => e.preventDefault()}>Traveling <span role="img" aria-label='emoji'>🛩</span></a>
                <a onClick={(e) => e.preventDefault()}>Movies <span role="img" aria-label='emoji'>🍿</span></a>
            </Cloud>
        </div>
        
    </section>
  )
}
