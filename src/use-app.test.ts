import {act, renderHook} from '@testing-library/react-native';
import 'react-native';
import {useApp, TITLE_ZERO, TITLE_NOTZERO} from './use-app';
import * as useCounter from './use-counter';

// jest.mock('./use-counter');
// const mockedUseCounter = jest.mocked(useCounter);
const mockedUseCounter = jest.spyOn(useCounter, 'useCounter');

describe('Test useApp()', () => {
  it('initial title', () => {
    mockedUseCounter.mockImplementation(() => ({
      value: 0,
      increase: jest.fn(),
      decrease: jest.fn(),
    }));

    const {result} = renderHook(() => useApp());
    expect(result.current.title).toBe(TITLE_ZERO);
  });

  it('title not zero', () => {
    mockedUseCounter.mockImplementation(() => ({
      value: 1,
      increase: jest.fn(),
      decrease: jest.fn(),
    }));

    const {result} = renderHook(() => useApp());
    expect(result.current.title).toBe(TITLE_NOTZERO);
  });
});

describe('Test useApp() with counter', () => {
  beforeAll(() => {
    mockedUseCounter.mockRestore();
  });

  it('change title', () => {
    const {result} = renderHook(() => useApp());
    expect(result.current.counter.value).toBe(0);
    expect(result.current.title).toBe(TITLE_ZERO);

    act(() => result.current.counter.increase());

    expect(result.current.title).toBe(TITLE_NOTZERO);

    act(() => result.current.counter.decrease());

    expect(result.current.title).toBe(TITLE_ZERO);
  });
});
