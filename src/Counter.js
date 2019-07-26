import React from 'react';
import { useCount } from './count-context';

export default function Counter(props) {
  const { count, increment } = useCount();
  return <button onClick={increment}>{count}</button>;
}
