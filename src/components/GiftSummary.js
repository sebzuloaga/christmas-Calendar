import React from 'react';
import RevealButton from './RevealButton';
import GiftDescription from './GiftDescription';

function GiftSummary (props) {
    return (
        <section>
            <RevealButton />
            <GiftDescription data={props.data}/>
        </section>
    )
}

export default GiftSummary;