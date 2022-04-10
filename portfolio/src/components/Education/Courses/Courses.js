import './Courses.scss'
import React from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const Courses = ({id, title, institution, modality, dates, repo, topics, coursesAmount}) => {
    
    //1) get length of topics
    let len = topics.length
    //2) divide length of topics by 2 (round up)
    const middleIndex = Math.ceil(len / 2);
    //3) create courseCol1 s
    const courseCol1  = topics.slice().splice(0, middleIndex);   
    const courseCol2  = topics.slice().splice(-middleIndex);

  return (
        <div className='course' id={`course${id}`}>
            <div className='courseInfo'>
                <h3 className='courseTitle'>
                    {title}
                </h3>
                <span className='courseInlineStyle'>
                    <h4 className='courseInstitute'>{institution}</h4>
                    <h5 className='courseModality'>{modality}</h5>
                </span>
                <h4 className='courseDates'>{dates}</h4>
                <a href={repo} rel="noreferrer" target="_blank" className='courseRepoLink'><h3 className='courseRepoText'>Go to repo <MdOutlineArrowRightAlt className='courseRepoArrow'/></h3></a>
            </div>
            
            {courseCol2.length > 0 
            ?
            <div className='topicsWrapper'>
                <ul className='courseCol1'>
                    {courseCol1.map((course) => <li>{course}</li>)}
                </ul>
                
                <ul className='courseCol2'>
                    {courseCol2.map((course) => <li>{course}</li>)}
                </ul>
            </div>
            :
            <div className='topicsWrapper'>
                <ul className='courseCol1'>
                    {topics.map((course) => <li>{course}</li>)}
                </ul>
            </div>
            }
        </div>
    )
}
