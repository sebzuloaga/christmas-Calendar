import React from 'react';
import PictureSummary from './PictureSummary';
import GiftSummary from './GiftSummary';

function DayOverview(props) {
    return (
        <main>
            <article>
                <PictureSummary data={props.data} />
                <GiftSummary data={props.data}/>
            </article>
        </main>
    )
}

export default DayOverview;