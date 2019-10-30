import React from 'react';

function Arrow(props) {

    const orientation = props.orientation;
    
    const handleClick = () => {
        props.handleClick(orientation);
    }

    const arrowType = orientation === 'left' ? <span>&lt;</span> : <span>&gt;</span>; 
    return (
        <aside onClick={handleClick}>
            {arrowType}
        </aside>
    )
}

export default Arrow;