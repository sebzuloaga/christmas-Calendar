import React from 'react';
import RevealButton from './RevealButton';
import GiftDescription from './GiftDescription';

function GiftSummary (props) {

    let style = props.clue ? {visibility: "hidden"} : {visibility: "visible"};

    return (
        <section style={style} >
            <RevealButton />
            <GiftDescription data={props.data}/>
        </section>
    )
}

export default GiftSummary;