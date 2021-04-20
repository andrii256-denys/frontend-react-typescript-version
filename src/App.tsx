import React from 'react';
import { AnotherOffers } from './components/AnotherOffers';
import { MainScreen } from './components/MainScreen';
import { Statistics } from './components/Statistics'
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <MainScreen />
      <AnotherOffers />
      <Statistics />
      <Footer />
    </div>
  );
}

export default App;
