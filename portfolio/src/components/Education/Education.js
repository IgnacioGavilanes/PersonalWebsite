import './Education.scss';
import React, {useRef, useEffect, useState} from 'react'
import { Courses } from './Courses/Courses'
import courses from '../../data/courses.json'
import { Website } from './Website/Website';
import { Future } from './Future/Future';
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import { MdArrowForwardIos } from "react-icons/md";
// import { leftArrow } from '../../leftArrow';
// import { rightArrow } from './rightArrow.svg'
import { useGifFetch } from '../../utils/useGifFetch';

// id, className, width, borderRadius
const educationGif = '3ohuAxV0DfcLTxVh6w', educationClassName='educationGif', educationWidth = 350,  educationBorderRadius = 6;

export const Education = () => {

    //--------------------------------------------------------------------------------------------------------------------------------------------------
    //THIS WORKS, STILL NEED TO CLEAN IT UP THOUGH...


    // const coursesList = [...courses]
    // const coursesListLength = coursesList.length

    // const elementRef = useRef();

    // const [screenWidth, setScreenWidth] = useState(1)
    // const [scrollPositionX, setScrollPositionX] = useState(0)
    // const [courseNumber, setCourseNumber] = useState(1)

    // const screenResize = () => {
    //     setScreenWidth(elementRef.current.offsetWidth);
    // }

    // const horizontalScroll = () => {
    //     setScrollPositionX(elementRef.current.scrollLeft)
    //     setCourseNumber(Math.ceil(scrollPositionX/screenWidth) + 1)
    // }

    // const [scrollPosition, setScrollPosition] = useState(0);
    // const handleScroll = () => {
    //     const position = elementRef.current.scrollLeft;
    //     setScrollPosition(position);
    // };    
    
    // useEffect(() => {

    //     screenResize()
    //     horizontalScroll()

    //     elementRef.current.addEventListener('scroll', handleScroll, { passive: true });

    //     return () => {
    //         elementRef.current.removeEventListener('scroll', handleScroll);
    // };

    // }, [screenWidth, scrollPositionX, scrollPosition]);

    // const scrollLeft = () => {
    //     const divElement = elementRef.current
    //     divElement.scrollLeft -= divElement.scrollWidth / coursesListLength;
    // }
    
    // const scrollRight = () => {
    //     const divElement = elementRef.current
    //     divElement.scrollLeft += divElement.scrollWidth / coursesListLength;
    // }
   //--------------------------------------------------------------------------------------------------------------------------------------------------


   const coursesList = [...courses]
   const coursesListLength = coursesList.length

   const elementRef = useRef();

   const [screenWidth, setScreenWidth] = useState(1)
   const [scrollPositionX, setScrollPositionX] = useState(0)
   const [courseNumber, setCourseNumber] = useState(1)

   const screenResize = () => {
       setScreenWidth(elementRef.current.offsetWidth);
   }

   const horizontalScroll = () => {
       setScrollPositionX(elementRef.current.scrollLeft)
       setCourseNumber(Math.ceil(scrollPositionX/screenWidth) + 1)
   }

   const [scrollPosition, setScrollPosition] = useState(0);
   const handleScroll = () => {
       const position = elementRef.current.scrollLeft;
       setScrollPosition(position);
   };    
   
   useEffect(() => {

       screenResize()
       horizontalScroll()

       elementRef.current.addEventListener('scroll', handleScroll, { passive: true });

       return () => {
           elementRef.current.removeEventListener('scroll', handleScroll);
   };

   }, [screenWidth, scrollPositionX, scrollPosition]);

   const scrollLeft = () => {
       const divElement = elementRef.current
       divElement.scrollLeft -= (divElement.scrollWidth / coursesListLength);
   }
   
   const scrollRight = () => {
       const divElement = elementRef.current
       divElement.scrollLeft += (divElement.scrollWidth / coursesListLength);
   }



  return (
    <section id='education'>
        <div className='eduTitleWrapper'>
            <h2 className='eduTitle'>
                Education.
            </h2>
            <div className='hideEducationGif'>
                {useGifFetch(educationGif, educationClassName, educationWidth, educationBorderRadius)}
            </div>
        </div>
        <div className='eduWrapper'>
            <p className='eduInfo'>
                These are some of the courses I have completed so far:
            </p>
        </div>


        <div className='arrowsContainer'>
            <CgArrowLongLeft className='sliderButton left' onClick={scrollLeft}/>
            <CgArrowLongRight className='sliderButton right' onClick={scrollRight}/>
        </div>
  

        
        <div className='coursesContainer' ref={elementRef}>
            {coursesList.map((course) => <Courses key={course.id} {...course} coursesAmount={coursesListLength}/>)}
            {/* HERE GOES THE PROGRESS BAR*/}
            
        </div>

        <span id='progressBarWrapper'>
                <h6 className='num'>{courseNumber}</h6>
                <div id='progressBar'>
                    <div id='filledBar' style={{width: `${courseNumber/coursesListLength*15}rem`}}/> 
                    <div id='emptyBar'/>
                </div>
                <h6 className='num'> {coursesListLength}</h6>
            </span>

        <div className='cvButtonWrapper'>
            <button id='cv'>
                <div id='cvCircle'>
                    <MdArrowForwardIos className='cvArrow'/>
                </div>
                <p id='cvText'>Download My Resume</p>
            </button>
        </div>


        <div className='extraContainer'>
            <Website/>
            <Future/>
        </div>
    </section>
  )
}