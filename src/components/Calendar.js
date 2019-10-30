import React from 'react';
import Day from './Day';

function Calendar() {
    return (
        <footer>
            <div className="dayContainer">
                <Day />
            </div>
        </footer>
    )
}

export default Calendar;