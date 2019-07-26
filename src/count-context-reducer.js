import React, { useReducer, useMemo, createContext, useContext } from 'react';

const CountContext = createContext();

function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return { count: state.count + 1 };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

function CountProvider(props) {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  const value = useMemo(() => [state, dispatch], [state]);
  return <CountContext.Provider value={value} {...props} />;
}

function useCount() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  const [state, dispatch] = context;
  const increment = () => dispatch({ type: 'INCREMENT' });

  return {
    state,
    dispatch,
    increment,
  };
}

export { CountProvider, useCount };
