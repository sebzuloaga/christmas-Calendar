import React, {useState} from 'react';
import Arrow from './Arrow';
import Day from './Day';
import calendarData from '../data/calendarData';

const calendar = calendarData;

function Calendar(props) {
    const [position, setPosition] = useState({left: '0%'});
    const [day, setDay] = useState(1);

    const handleClick = (orientation) => {

        if(day >= 1 && day <= 24) {
            const currentPosition = position.left;
            const positionToNumber = (Number(currentPosition.split('%')[0]));

            if(orientation === 'left' && day > 1){
                setDay(day - 1);
                const newStyle = (positionToNumber + 25) + '%';
                setPosition({left: newStyle}); 
            }else if(orientation === 'right' && day < 24){
                setDay(day + 1);
                const newStyle = (positionToNumber - 25) + '%';
                setPosition({left: newStyle}); 
            }
        }
    }

    return (
        <footer>
            <Arrow orientation="left" handleClick={handleClick}/>
            <div className="dayContainer" style={position}>
                {calendar.map( (day) => {
                    return <Day data={day} key={day.date} handleCalendarClick={props.handleCalendarClick}/>
                })}
            </div>
            <Arrow orientation="right" handleClick={handleClick}/>
        </footer>
    )
}

export default Calendar;