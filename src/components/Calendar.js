import React, {useState} from 'react';
import Arrow from './Arrow';
import Day from './Day';
import calendarData from '../data/calendarData';

const calendar = calendarData;

function Calendar() {
    const [position, setPosition] = useState({left: '35%'});

    const handleClick = (orientation) => {
        const currentPosition = position.left;
        const positionToNumber = (Number(currentPosition.split('%')[0]));
        const newStyle = orientation === 'left' ? (positionToNumber - 16.75) + '%' : (positionToNumber + 17) + '%';
        setPosition({left: newStyle});
    }

    return (
        <footer>
            <Arrow orientation="left" handleClick={handleClick}/>
            <div className="dayContainer" style={position}>
                {calendar.map( (day) => {
                    return <Day data={day} key={day.date}/>
                })}
            </div>
            <Arrow oreitnation="right" handleClick={handleClick}/>
        </footer>
    )
}

export default Calendar;