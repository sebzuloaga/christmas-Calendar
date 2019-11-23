import React from 'react';

function Hint(props) {
    
    let style = props.visibility ? {display: "flex"} : {display: "none"};

    return(
        <figcaption className="noShow" style={style} >
            <p style={{display: "block"}}>{props.data ? `${props.data}` : ``}</p>
        </figcaption>
    )
}

export default Hint;
