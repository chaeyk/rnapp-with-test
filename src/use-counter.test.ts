import {act, renderHook} from '@testing-library/react-native';
import 'react-native';
import {useCounter} from './use-counter';

it('initial value check', () => {
  const {result} = renderHook(() => useCounter());
  expect(result.current.value).toBe(0);
});

it('increase test', () => {
  const {result} = renderHook(() => useCounter());
  const before = result.current.value;

  act(() => {
    result.current.increase();
  });

  expect(result.current.value).toBe(before + 1);
});

it('decrease test', () => {
  const {result} = renderHook(() => useCounter());
  const before = result.current.value;

  act(() => {
    result.current.decrease();
  });

  expect(result.current.value).toBe(before - 1);
});
