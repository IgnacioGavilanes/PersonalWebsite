import './Footer.scss'
import React from 'react'
import {Clock} from './Clock/Clock';

export const Footer = () => {
  return (
    <footer>
        <div className='footerCr'>
            <h6 className='cr'>Ignacio Gavilanes ® 2022</h6>
        </div>
        <div className='footerInfo'>
          <h6 className='phrase'>Powered by Figma, VS Code and lots of coffee ☕️</h6>
          <h6 className='coordinates'>
            -34°50'14.2218" -56°0'58.2948"
          </h6>
          <h6 className='clock'>
            My current time is: <Clock/>
          </h6>
        </div>
    </footer>
  )
}
