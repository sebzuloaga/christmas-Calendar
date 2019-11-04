import React from 'react';

function Gift (props) {
    return (
        <>
            <h1>{props.data.title}</h1>
            <h3>{props.data.day} of December of 2019</h3>
            <p>{props.data.description}</p>
            <blockquote>
                <p className="phrase">
                    <span>Today's phrase:</span> {props.data.phrase}
                </p>
            </blockquote>
        </>
    )
}

export default Gift;