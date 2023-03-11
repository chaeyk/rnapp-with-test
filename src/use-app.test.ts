import {renderHook} from '@testing-library/react-native';
import 'react-native';
import {useApp, TITLE_ZERO, TITLE_NOTZERO} from './use-app';
import {useCounter} from './use-counter';

jest.mock('./use-counter');
const mockedUseCounter = jest.mocked(useCounter);

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
