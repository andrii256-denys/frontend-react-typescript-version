import React from 'react';
import { AnotherOffers } from './components/AnotherOffers';
import { MainScreen } from './components/MainScreen';
import { Statistics } from './components/Statistics'

function App() {
  return (
    <div className="App">
      <MainScreen />
      <AnotherOffers />
      <Statistics />
    </div>
  );
}

export default App;
