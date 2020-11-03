import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { shallow, mount } from "enzyme";
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

    wrapper.find("input#name").prop("onChange")({
      target: {
        type: "text",
        checked: false,
        name: "name",
        value: user.name,
      },
    });
    wrapper.find("input#email").prop("onChange")({
      target: {
        type: "text",
        checked: false,
        name: "email",
        value: user.email,
      },
    });
    wrapper.find("input#password").prop("onChange")({
      target: {
        type: "text",
        checked: false,
        name: "password",
        value: user.password,
      },
    });
  });
});
