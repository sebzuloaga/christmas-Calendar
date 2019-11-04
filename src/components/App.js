import React, {useState, useEffect} from 'react';
import Welcome from './Welcome';
import Calendar from './Calendar';
import DayOverview from './DayOverview';
import calendarData from '../data/calendarData';
import '../styles/style.scss';

function App() {

  const [day, setDay] = useState("01/12/2019");
//  Effect to check the current date and pass it to the default
  useEffect( () => {

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; 
    const yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    } 
    if (mm < 10) {
      mm = '0' + mm;
    } 

    today = dd + '/' + mm + '/' + yyyy;

    if (Date(today) <= Date(day)){
      console.log("lowerDay");
    }else{
      setDay(today);
    }
  }, [])

  return (
    <div className="App">
      <Welcome />
      <DayOverview data={calendarData}/>
      <Calendar />
    </div>
  );
}

export default App;
