import React from 'react';
import Picture from './Picture.js'
import Hint from './Hint.js';

function PictureSummary (props) {
    return (
        <figure>
            <Hint data={props.data.clue} visibility={props.clue}/>
            <Picture data={props.data.category}/>
        </figure>
    )
}

export default PictureSummary;