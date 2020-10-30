import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("Pruebas unitarias en el hook personalizado useCounter.js", () => {
  /************************************************************************************/
  test("se debe retornar valores por defecto", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(1);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });
  /************************************************************************************/
  test("se debe retornar el valor pasado", () => {
    const count = 10;
    const { result } = renderHook(() => useCounter(count));

    expect(result.current.counter).toBe(count);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });
  /************************************************************************************/
  test("se debe incrementar el valor pasado con una tasa incremental definida", () => {
    const count = 10;
    const rate = 2;
    const { result } = renderHook(() => useCounter(count));
    const { increment } = result.current;
    act(() => {
      increment(rate);
    });
    const { counter } = result.current;

    expect(counter).toBe(count + rate);
  });
  /************************************************************************************/
  test("se debe decrementar el valor pasado con una tasa decremental definida", () => {
    const count = 10;
    const rate = 2;
    const { result } = renderHook(() => useCounter(count));
    const { decrement } = result.current;
    act(() => {
      decrement(rate);
    });
    const { counter } = result.current;

    expect(counter).toBe(count - rate);
  });
  /************************************************************************************/
  test("se debe resetear el counter al valor inicial", () => {
    const count = 10;
    const rate = 2;
    const { result } = renderHook(() => useCounter(count));
    const { reset, increment, decrement } = result.current;
    act(() => {
      increment(rate);
      increment(rate);
      increment(rate);
      increment(rate);
      decrement(rate);
      decrement(rate);      
      reset();
    });
    const { counter } = result.current;

    expect(counter).toBe(count);
  });
});
