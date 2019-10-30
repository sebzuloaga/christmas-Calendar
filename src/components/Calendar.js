import React from 'react';
import Arrow from './Arrow';
import Day from './Day';

function Calendar() {
    return (
        <footer>
            <Arrow />
            <div className="dayContainer">
                <Day />
            </div>
            <Arrow />
        </footer>
    )
}

export default Calendar;