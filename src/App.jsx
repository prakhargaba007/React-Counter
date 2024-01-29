import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import ConfigerCounter from './components/Counter/ConfigerCounter.jsx';
import { log } from './log.js';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <ConfigerCounter ChosenCount={setChosenCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
        {/* <Counter initialCount={0} /> */}
      </main>
    </>
  );
}

export default App;
