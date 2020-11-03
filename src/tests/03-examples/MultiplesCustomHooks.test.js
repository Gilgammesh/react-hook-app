import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import MultiplesCustomHooks from "../../components/03-examples/MultiplesCustomHooks";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useCounter");

describe("Pruebas unitarias en el componente MultiplesCustomHooks.js", () => {
  useCounter.mockReturnValue({
    counter: 1,
    increment: () => {},
  });
  /***********************************************************************************************************/
  test("se debe mostrar el componente <MultiplesCustomHooks /> correctamente", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultiplesCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });
  /***********************************************************************************************************/
  test("se debe mostrar cargando... mientras se espera la información de la peticion url", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultiplesCustomHooks />);
    const div = wrapper.find("div.alert");

    expect(div.exists()).toBe(true);
    expect(div.text().trim()).toBe("Loading ...");
  });
  /***********************************************************************************************************/
  test("se debe mostrar la información de la peticion url en el componente", () => {
    useFetch.mockReturnValue({
      data: [
        {
          quote_id: 1,
          quote: "I am the danger!",
          author: "Walter White",
          series: "Breaking Bad",
        },
      ],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultiplesCustomHooks />);
    const div = wrapper.find("div.blockquote");

    expect(div.exists()).toBe(true);

    const h4 = wrapper.find("div.blockquote h4");
    const p = wrapper.find("div.blockquote p");
    const footer = wrapper.find("div.blockquote footer");

    expect(h4.text().trim()).toBe("1");
    expect(p.text().trim()).toBe("I am the danger!");
    expect(footer.text().trim()).toBe("Walter White");
  });
});
