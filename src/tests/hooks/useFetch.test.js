import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe("Pruebas unitarias en el hook personalizado useFetch.js", () => {
  /***********************************************************************************************************/
  test("se debe retornar la información por defecto pasando una url", () => {
    const urltest = "https://www.breakingbadapi.com/api/quotes/1";
    const { result } = renderHook(() => useFetch(urltest));
    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });
  /***********************************************************************************************************/
  test("se debe retornar la información luego de recibir la respuesta de la petición a la url", async () => {
    const urltest = "https://www.breakingbadapi.com/api/quotes/1";
    const { result, waitForNextUpdate } = renderHook(() => useFetch(urltest));
    await waitForNextUpdate();
    const { data, loading, error } = result.current;

    expect(data.length).toBeGreaterThan(0);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });
  /***********************************************************************************************************/
  test("se debe retornar un error cuando se mande un url incorrecto", async () => {
    // const urltest = "https://dev.regionsanmartin.gob.pe/tramite/api/auth";
    const urltest = "https://reqres.in/apix/users?page=1";
    const { result, waitForNextUpdate } = renderHook(() => useFetch(urltest));
    await waitForNextUpdate();
    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error instanceof Error).toBe(true);
  });
});
