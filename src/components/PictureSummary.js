import React from 'react';
import Picture from './Picture.js'
import Hint from './Hint.js';
import Gift from '../assets/gift.svg';

function PictureSummary (props) {
    return (
        <figure>
            <Hint />
            <Picture />
        </figure>
    )
}

export default PictureSummary;