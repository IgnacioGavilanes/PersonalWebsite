import './Future.scss';
import React from 'react'
import { SiSwift, SiMongodb, SiRedux, SiNodedotjs, SiExpress } from "react-icons/si";


export const Future = () => {
  return (
    <section id='future'>
        <div className='futureSubTitleWrapper'> 
            <h3 className='futureSubTitle'>Plans for the future.</h3>
        </div>
  
        <div className='futureInfoWrapper'>
            <p className='futureInfo'>
                In the near future I would like to learn the following technologies:
            </p> 
        </div>

        <div className='futureIconsWrapper'>
          <figure><SiSwift className='futureIcon'/><figcaption className='futureFigcaption'>Swift</figcaption></figure>
          <figure><SiMongodb className='futureIcon'/><figcaption className='futureFigcaption'>MongoDB</figcaption></figure>
          <figure><SiRedux className='futureIcon'/><figcaption className='futureFigcaption'>Redux</figcaption></figure>
          <figure><SiNodedotjs className='futureIcon'/><figcaption className='futureFigcaption'>NodeJs</figcaption></figure>
          <figure><SiExpress className='futureIcon'/><figcaption className='futureFigcaption'>ExpressJs</figcaption></figure>
        </div>

        <div className='futureRationaleWrapper'>
            <p className='futureRationale'>
                I would like to become a fullstack developer and then either learn React Native or Swift to delve into mobile development.
            </p> 
        </div>
    </section>
  )
}
