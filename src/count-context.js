import React, { createContext, useContext, useState, useMemo } from 'react';

const CountContext = createContext();

function useCount() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  const [count, setCount] = context;
  const increment = () => setCount(c => c + 1);

  return {
    count,
    increment,
  };
}

function CountProvider(props) {
  const [count, setCount] = useState(0);
  const value = useMemo(() => [count, setCount], [count]);
  return <CountContext.Provider value={value} {...props} />;
}

export { CountProvider, useCount };
