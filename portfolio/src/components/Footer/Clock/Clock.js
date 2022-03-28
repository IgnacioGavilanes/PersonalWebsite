import './Clock.scss';
import React, {useState, useEffect} from 'react'

export const Clock = () => {
    const [clockState, setClockState] = useState()

    useEffect(() => {
        setInterval( () => {
            let options = {
                timeZone: 'America/Montevideo',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                }
            let formatter = new Intl.DateTimeFormat([], options);

            setClockState(formatter.format(new Date()));
            }, 1000);

    }, [])
  return (
    <>
        {clockState}
    </>
  )
}
