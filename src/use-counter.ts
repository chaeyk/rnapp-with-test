import {useCallback, useState} from 'react';

export function useCounter() {
  const [counter, setCounter] = useState(0);

  return {
    value: counter,
    increase: useCallback(() => setCounter(v => v + 1), []),
    decrease: useCallback(() => setCounter(v => v - 1), []),
  };
}
