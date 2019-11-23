import React, {useState, useEffect} from 'react';
import PictureSummary from './PictureSummary';
import GiftSummary from './GiftSummary';
import {dayChecker, getToday} from '../util/dayCheck';

function DayOverview(props) {

    const [clueVis, setClueVis] = useState(true);

    useEffect( () => {

        let today = getToday();
        let todaySplit = (today).split('/');
        let daySplit = (props.data.date).split('/');
        console.log(todaySplit);
        console.log(daySplit);

        if(todaySplit[1] === "12" ){
          if(parseInt(todaySplit[0]) < parseInt(daySplit[0])){
            console.log('Day is lower');
            setClueVis(true);
          }else{
            setClueVis(false);
            console.log('Clue available');
          }
        }else{
          setClueVis(true);
          console.log('Not December');
        }
      })

    return (
        <main>
            <article>
                <PictureSummary data={props.data} clue={clueVis}/>
                <GiftSummary data={props.data} clue={clueVis}/>
            </article>
        </main>
    )
}

export default DayOverview;