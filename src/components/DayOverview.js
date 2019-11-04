import React from 'react';
import PictureSummary from './PictureSummary';
import GiftSummary from './GiftSummary';

function DayOverview(props) {
    return (
        <main>
            {
                props.data.map( day => {
                    return(
                        <article>
                            <PictureSummary 
                                hint={day.clue}/>
                            <GiftSummary 
                                data={day}/>
                        </article>
                    )
                })
            }
        </main>
    )
}

export default DayOverview;