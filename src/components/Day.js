import React from 'react';
import Gift from '../assets/gift.svg';

function Day (props) {
    return(
        <article>
            <figure>
                <img src={Gift} />
            </figure>
            <h4>{props.data.day} day of Christmas</h4>
        </article>
    )
}

export default Day;