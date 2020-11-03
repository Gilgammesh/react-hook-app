import "@testing-library/jest-dom";
import { todoReducer } from "../../components/08-useReducer/todoReducer";
import { demoTodos } from "../fixtures/demoTodos";

describe("Pruebas unitarias en la función todoReducer.js", () => {
  /************************************************************************************/
  test("se debe retornar el estado por defecto", () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });
  /************************************************************************************/
  test("se debe de agregar un TODO", () => {
    const newTodo = {
      id: 3,
      desc: "Aprender Express",
      done: true,
    };
    const state = todoReducer(demoTodos, {
      type: "add",
      payload: newTodo,
    });
    expect(state.length).toBe(demoTodos.length + 1);
    expect(state).toEqual([...demoTodos, newTodo]);
  });
  /************************************************************************************/
  test("se debe de eliminar un TODO", () => {
    const id = 1;
    const state = todoReducer(demoTodos, {
      type: "delete",
      payload: id,
    });
    expect(state.length).toBe(demoTodos.length - 1);
    expect(state).toEqual(
      demoTodos.filter((ele) => {
        return ele.id != 1;
      })
    );
  });
});
