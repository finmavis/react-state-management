import React, { Fragment } from 'react';
import Counter from './components/Counter';
import CountDisplay from './components/CountDisplay';
import { CountProvider } from './context/count-context';

function App() {
  return (
    <Fragment>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </Fragment>
  );
}

export default App;
