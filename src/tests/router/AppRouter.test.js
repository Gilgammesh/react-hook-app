import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";
import "@testing-library/jest-dom";
import AppRouter from "../../router/AppRouter";
import UserContext from "../../components/09-useContext/UserContext";

describe("Pruebas unitarias en el componente AppRouter.js", () => {
  const user = {
    id: 1,
    name: "Carlos",
    email: "carlos.santander@gmail.com",
    password: "123456",
  };
  const setUser = jest.fn();
  /************************************************************************************/
  test("se debe mostrar el componente <AppRouter /> correctamente", () => {
    const wrapper = mount(
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <AppRouter />
      </UserContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
