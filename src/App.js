import React from 'react';

import Nav from './components/Navbar/nav';
import Section from './components/Section/section';
import Overlay from './components/Objects/overlay';

function App() {
  return (
    <div className="App">
      <Overlay img="img/calendar1.png"/>
      <Nav />
      <Section />
    </div>
  );
}

export default App;
