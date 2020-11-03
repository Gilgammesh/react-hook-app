import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import Todo from "../../components/08-useReducer/Todo";

describe("Pruebas unitarias en el componente Todo.js", () => {
  const ele = {
    id: 1,
    desc: "Aprender React",
    done: true,
  };
  const index = 0;
  const dispatch = jest.fn();
  /************************************************************************************/
  test("se debe mostrar el componente <Todo /> correctamente", () => {
    const wrapper = shallow(
      <Todo ele={ele} index={index} dispatch={dispatch} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  /************************************************************************************/
  test("se debe llamar la función dispatch en el componente", () => {
    const wrapper = shallow(
      <Todo ele={ele} index={index} dispatch={dispatch} />
    );
    const btn = wrapper.find("button");
    btn.simulate("click");
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({ type: "delete", payload: ele.id });
  });
  /************************************************************************************/
  test("se debe mostrar la información del TODO correctamente en el componente", () => {
    const wrapper = shallow(
      <Todo ele={ele} index={index} dispatch={dispatch} />
    );
    const btn = wrapper.find("button");
    btn.simulate("click");
    const h5 = wrapper.find("h5");
    expect(h5.text().trim()).toBe(`ID - ${ele.id}`);
    const p = wrapper.find("p");
    expect(p.at(0).text().trim()).toBe(`${index + 1}.- ${ele.desc}`);
    const span = wrapper.find("span.badge");
    if (ele.done) {
      expect(span.text().trim()).toBe("Hecho");
    } else {
      expect(span.text().trim()).toBe("Pendiente");
    }
  });
});
