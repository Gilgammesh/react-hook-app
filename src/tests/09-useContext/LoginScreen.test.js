import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";
import { act } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginScreen from "../../components/09-useContext/LoginScreen";
import UserContext from "../../components/09-useContext/UserContext";

describe("Pruebas unitarias en el componente LoginScreen.js", () => {
  const user = {
    id: 1,
    name: "Carlos",
    email: "carlos.santander@gmail.com",
    password: "123456",
  };
  const setUser = jest.fn();
  const func = () => {};
  /************************************************************************************/
  test("se debe mostrar el componente <LoginScreen /> correctamente", () => {
    const wrapper = mount(
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <Router>
          <LoginScreen />
        </Router>
      </UserContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  /************************************************************************************/
  test("se debe ejecutar el setUser con el argumento esperado", () => {
    const wrapper = mount(
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <Router>
          <LoginScreen />
        </Router>
      </UserContext.Provider>
    );

    act(() => {
      wrapper.find("form").prop("onSubmit")({ preventDefault: func });
    });
    expect(setUser).toHaveBeenCalled();
    expect(setUser).toHaveBeenCalledTimes(1);
  });
});
