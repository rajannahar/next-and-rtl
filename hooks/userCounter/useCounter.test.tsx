import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from './useCounter';


describe('useCounter hook', () => {

  it('should return default value', () => {
  
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });
  
  it('should increment', () => {
  
    const { result } = renderHook(() => useCounter());
  
    act(() => {
      result.current.increment();
    })
  
    expect(result.current.count).toBe(1);
  });
})
