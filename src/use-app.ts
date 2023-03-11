import {useCounter} from './use-counter';

export const TITLE_ZERO = 'Zero';
export const TITLE_NOTZERO = 'Not Zero';

export function useApp() {
  const counter = useCounter();

  return {
    counter,
    title: counter.value === 0 ? TITLE_ZERO : TITLE_NOTZERO,
  };
}
