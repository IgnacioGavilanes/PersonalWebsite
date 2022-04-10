import './Website.scss'
import React from 'react'
import { SiNetlify, SiReact, SiFigma } from "react-icons/si";
import { FaSass, FaGitAlt } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const Website = () => {
  return (
    <section id='website'> 

        <div className='websiteSubTitleWrapper'> 
            <h3 className='websiteSubTitle'>What about this website?</h3>
        </div>

        <div className='websiteInfoWrapper'>
            <p className='websiteInfo'>
                This website was designed and created as a means to showcase my skills. 
            <br/><br/>
                Here are some of the tools and technologies I utilized to develop this project:
            </p> 
        </div>

        <div className='websiteIconsWrapper'>
            <figure><SiReact className='websiteIcon'/><figcaption className='websiteIconFigcaption'>ReactJs</figcaption></figure>
            <figure><FaSass className='websiteIcon'/><figcaption className='websiteIconFigcaption'>Scss</figcaption></figure>
            <figure><FaGitAlt className='websiteIcon'/><figcaption className='websiteIconFigcaption'>git</figcaption></figure>
            <figure><SiFigma className='websiteIcon'/> <figcaption className='websiteIconFigcaption'>Figma</figcaption></figure>
            <figure><SiNetlify className='websiteIcon'/><figcaption className='websiteIconFigcaption'>Netlify</figcaption></figure>
        </div>

        <div className='websiteRepoWrapper'>
            <p className='websiteRepoInfo'>You can also take a look behind the hood with the link below:</p>
            <a href='https://github.com/IgnacioGavilanes/PersonalWebsite' rel="noreferrer" target="_blank" className='websiteRepoLink'><h3 className='websiteRepoText'>Go to repo <MdOutlineArrowRightAlt className='websiteRepoArrow'/></h3></a>
        </div>

    </section>
  )
}
