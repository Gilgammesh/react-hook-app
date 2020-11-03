import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import TodoForm from "../../components/08-useReducer/TodoForm";

describe("Pruebas unitarias en el componente TodoForm.js", () => {
  const dispatch = jest.fn();
  const func = () => {};
  /************************************************************************************/
  test("se debe mostrar el componente <TodoForm /> correctamente", () => {
    const wrapper = shallow(<TodoForm dispatch={dispatch} />);
    expect(wrapper).toMatchSnapshot();
  });
  /************************************************************************************/
  test("no se debe de llamar la funcion dispatch, mientras la desc este en blanco", () => {
    const wrapper = shallow(<TodoForm dispatch={dispatch} />);
    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault: func });
    expect(dispatch).toHaveBeenCalledTimes(0);
    expect(dispatch).not.toHaveBeenCalled();
  });
  /************************************************************************************/
  test("se debe de llamar la funcion dispatch al cambiar el input descripción", () => {
    const value = "Aprender React";
    const name = "desc";
    const type = "text";
    const checked = false;
    const wrapper = shallow(<TodoForm dispatch={dispatch} />);
    const handleInputChange = wrapper
      .find("input#descripcion")
      .prop("onChange");
    handleInputChange({ target: { type, checked, name, value } });
    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault: func });
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({
      payload: {
        desc: value,
        done: false,
        id: expect.any(Number),
      },
      type: "add",
    });
    const input = wrapper.find("input#descripcion");
    expect(input.prop("value").trim()).toBe("");
  });
});
