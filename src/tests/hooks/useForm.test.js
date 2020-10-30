import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Pruebas unitarias en el hook personalizado useForm.js", () => {
  const initialFormValues = {
    field1: "value1",
    field2: "value2",
    field3: "value3",
  };
  /************************************************************************************/
  test("se debe retornar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialFormValues));
    const [formValues, handleInputChange, resetForm] = result.current;

    expect(formValues).toEqual(initialFormValues);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof resetForm).toBe("function");
  });
  /************************************************************************************/
  test("se debe de cambiar los valores del formulario", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useForm(initialFormValues)
    );

    let target = {};
    target = {
      type: "text",
      checked: false,
      name: "field1",
      value: "newValue1",
    };
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({ target });
    });

    const [formValues] = result.current;
    expect(formValues).toEqual({ ...initialFormValues, field1: "newValue1" });
  });
  /************************************************************************************/
  test("se debe resetear el formulario a los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialFormValues));
    const [, , resetForm] = result.current;

    act(() => {
      resetForm(initialFormValues);
    });
    const [formValues] = result.current;

    expect(formValues).toEqual(initialFormValues);
  });
});
