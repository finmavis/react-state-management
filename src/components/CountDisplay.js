import React from 'react';
import { useCount } from '../context/count-context';

export default function CountDisplay(props) {
  const { count } = useCount();

  return <div>The current counter count is {count}</div>;
}
