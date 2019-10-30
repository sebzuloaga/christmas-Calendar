import React from 'react';
import Welcome from './Welcome';
import Calendar from './Calendar';
import DayOverview from './DayOverview';
import '../styles/style.scss';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Calendar />
      <DayOverview />
    </div>
  );
}

export default App;
