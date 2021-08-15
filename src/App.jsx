import './App.css';
import React, { useState, useEffect } from 'react';
import TimeForm from './Components/TimeForm';
import TimeStamps from './Components/TimeStamps';

const App = props => {

  const [dt, setDT] = useState({});

  useEffect( () => {
    const date = new Date();
    date.setSeconds(0);
    setDT(date);
  }, [])

  const gotATime = dt => {
    setDT(dt);
  }

  return (
    <>
      <TimeForm newTime={gotATime} />
      <TimeStamps dt={dt} />
    </>
  );
}

export default App;
