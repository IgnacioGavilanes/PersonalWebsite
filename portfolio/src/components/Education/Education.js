import './Education.scss';
import React, {useRef, useEffect, useState} from 'react'
import { Courses } from './Courses/Courses'
import courses from '../../data/courses.json'
import { Website } from './Website/Website';
import { Future } from './Future/Future';
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
// import { leftArrow } from '../../leftArrow';
// import { rightArrow } from './rightArrow.svg'

export const Education = () => {

    const coursesList = [...courses]


    const coursesListLength = coursesList.length
    console.log(coursesListLength)

    const elementRef = useRef();
    const [width, setWidth] = useState(0)

    // const [positionX, setPositionX] = useState(0)
    
        useEffect(() => {

        const resize = () => {
            const newWidth = elementRef.current.offsetWidth;

            const positionX = elementRef.current.scrollLeft
            // console.log(width)
            setWidth(newWidth);
            console.log(width, positionX)
            console.log(`Course ${Math.ceil((positionX+1)/width)}/3`) //Gives out the number of course
        };
        window.onresize = function(){resize()};     
      }, [width]);


    //NOW I NEED TO CHECK FOR Math.ceil((positionX+1)/width) ON SCROLL 
    // const [scroll, setScroll] = useState(0)
    // useEffect(()=> {
    //     const scrolling () => {

    //     }

    // }),[]


////////////
    // const [scrolling, setScrolling] = useState(false);
    // const [scroll, setScroll] = useState(0);

    // useEffect(() => {
    // const onScroll = e => {
    //     setScroll(e.target.elementRef.scrollX);
    //     setScrolling(e.target.elementRef.scrollX > scroll);
    // };
    // window.addEventListener("scroll", onScroll);
    // console.log(scroll)
    // return () => window.removeEventListener("scroll", onScroll);
    // }, [scroll]);
//////////



    const scrollLeft = () => {
        const divElement = elementRef.current
        divElement.scrollLeft -= width;
        // console.log(Math.ceil(divElement.scrollLeft/674))
    }
    
    const scrollRight = () => {
    const divElement = elementRef.current
    // const positionX = divElement.scrollLeft
    // console.log(positionX/divElement)
    divElement.scrollLeft += width;
    }

  return (
    <section id='education'>
        <div className='eduTitleWrapper'>
            <h2 className='eduTitle'>
                Education.
            </h2>
        </div>
        <div className='eduWrapper'>
            <p className='eduInfo'>
                These are some of the courses I have completed so far:
            </p>
        </div>






        
        {/* 
        
        <button className='sliderButton left' >
            <img src={leftArrow} alt='arrow' nClick={scrollLeft} /> //THIS NEEDS TO BE COMMENTED IN CASE UNCOMMENT THE WHOLE THING
            <svg onClick={scrollLeft} width="127" height="24" viewBox="0 0 127 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.93934 13.0607C0.353553 12.4749 0.353553 11.5251 0.93934 10.9393L10.4853 1.3934C11.0711 0.807612 12.0208 0.807612 12.6066 1.3934C13.1924 1.97918 13.1924 2.92893 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.93934 13.0607ZM127 13.5H2V10.5H127V13.5Z" fill="black"/>
            </svg>
        </button>

        <button className='sliderButton right' >
            <img src={rightArrow} alt='arrow'  onClick={scrollRight}/> //THIS NEEDS TO BE COMMENTED IN CASE UNCOMMENT THE WHOLE THING
            <svg onClick={scrollRight} width="127" height="24" viewBox="0 0 127 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M126.061 13.0607C126.646 12.4749 126.646 11.5251 126.061 10.9393L116.515 1.3934C115.929 0.807611 114.979 0.807611 114.393 1.3934C113.808 1.97919 113.808 2.92893 114.393 3.51472L122.879 12L114.393 20.4853C113.808 21.0711 113.808 22.0208 114.393 22.6066C114.979 23.1924 115.929 23.1924 116.515 22.6066L126.061 13.0607ZM0 13.5H125V10.5H0V13.5Z" fill="black"/>
            </svg>
        </button>

         */}

        <div className='arrowsContainer'>
            <CgArrowLongLeft className='sliderButton left' onClick={scrollLeft}/>
            <CgArrowLongRight className='sliderButton right' onClick={scrollRight}/>
        </div>
  






        <div className='coursesContainer' ref={elementRef} >
            {coursesList.map((course) => <Courses key={course.id} {...course} coursesAmount={coursesListLength}/>)}
            {/* HERE GOES THE PROGRESS BAR*/}
        </div>
        <div className='cvButtonWrapper'>
            <button id='cv'>Download My Resume</button>
        </div>
        <div className='extraContainer'>
            <Website/>
            <Future/>
        </div>
    </section>
  )
}