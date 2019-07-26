import React from 'react';
import Counter from './Counter';
import CountDisplay from './CountDisplay';
import { CountProvider } from './count-context';

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  );
}

export default App;
