import React from 'react';
import Welcome from './Welcome';
import Calendar from './Calendar';
import DayOverview from './DayOverview';
import '../styles/style.scss';

function App() {
  return (
    <div className="App">
      <Welcome />
      <DayOverview />
      <Calendar />
    </div>
  );
}

export default App;
