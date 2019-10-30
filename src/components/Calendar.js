import React from 'react';
import Arrow from './Arrow';
import Day from './Day';

function Calendar() {
    return (
        <footer>
            <Arrow orientation="left"/>
            <div className="dayContainer">
                <Day />
            </div>
            <Arrow oreitnation="right"/>
        </footer>
    )
}

export default Calendar;