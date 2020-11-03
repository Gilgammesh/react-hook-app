import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import RealExampleRef from "../../components/04-useRef/RealExampleRef";
import MultiplesCustomHooks from "../../components/03-examples/MultiplesCustomHooks";

describe("Pruebas unitarias en el componente RealExampleRef.js", () => {
  /***********************************************************************************************************/
  test("se debe mostrar el componente <RealExampleRef /> correctamente", () => {
    const wrapper = shallow(<RealExampleRef />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(MultiplesCustomHooks).exists()).toBe(false);
  });
  /***********************************************************************************************************/
  test("se debe mostrar el componente <MultiplesCustomHooks /> correctamente", () => {
    const wrapper = shallow(<RealExampleRef />);
    wrapper.find("button").simulate("click");    
    expect(wrapper.find(MultiplesCustomHooks).exists()).toBe(true);
  });
});
