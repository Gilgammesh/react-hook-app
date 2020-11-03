import React from "react";
import { shallow, mount } from "enzyme";
import { act } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoApp from "../../components/08-useReducer/TodoApp";
import { demoTodos } from "../fixtures/demoTodos";

describe("Pruebas unitarias en el componente TodoApp.js", () => {
  Storage.prototype.setItem = jest.fn(() => {});
  /************************************************************************************/
  test("se debe mostrar el componente <TodoApp /> correctamente", () => {
    const wrapper = shallow(<TodoApp />);
    expect(wrapper).toMatchSnapshot();
  });
  /************************************************************************************/
  test("se debe agregar un TODO y cambiar el localstorage", () => {
    const value = "Aprender React";
    const wrapper = mount(<TodoApp />);
    act(() => {
      const dispatch = wrapper.find("TodoForm").prop("dispatch");
      dispatch({
        payload: demoTodos[0],
        type: "add",
      });
      dispatch({
        payload: demoTodos[1],
        type: "add",
      });
    });
    const h1 = wrapper.find('h1');
    expect(h1.text().trim()).toBe(`Todo App (2)`);
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);    
  });
  /************************************************************************************/
  test("se debe eliminar un TODO y cambiar el localstorage", () => {
    const value = "Aprender React";
    const wrapper = mount(<TodoApp />);
    act(() => {
      const dispatch = wrapper.find("TodoForm").prop("dispatch");
      dispatch({
        payload: demoTodos[0],
        type: "add",
      });
      dispatch({
        payload: demoTodos[0].id,
        type: "delete",
      });
    });
    const h1 = wrapper.find('h1');
    expect(h1.text().trim()).toBe(`Todo App (0)`);
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);    
  });
});
