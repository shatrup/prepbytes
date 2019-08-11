import React from 'react';
import Headers from './layouts/header'
import Progress from './coponents/progress'
import './App.css';
import ServiceBox from './coponents/ServiceBox';

function App() {
  return (
    <React.Fragment>
      <Headers />
      <Progress />
      <ServiceBox />
    </React.Fragment>
  );
}

export default App;
