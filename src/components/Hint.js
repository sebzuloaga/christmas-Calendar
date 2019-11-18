import React from 'react';

function Hint(props) {
    return(
        <figcaption className="noShow">
            <p><span>Hint:</span> {props.data}</p>
        </figcaption>
    )
}

export default Hint;
