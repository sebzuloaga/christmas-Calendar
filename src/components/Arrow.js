import React from 'react';

function Arrow(props) {

    const arrowType = props.orientation === 'left' ? <span>&lt;</span> : <span>&gt;</span>; 
    return (
        <aside>
            {arrowType}
        </aside>
    )
}

export default Arrow;