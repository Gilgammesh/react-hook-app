import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import HookApp from "../HookApp";

describe("Pruebas unitarias en el componente HookApp.js", () => {
  /************************************************************************************/
  test("se debe mostrar el componente <HookApp /> correctamente", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
