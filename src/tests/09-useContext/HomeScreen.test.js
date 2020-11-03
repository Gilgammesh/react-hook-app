import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { shallow, mount } from "enzyme";
import "@testing-library/jest-dom";
import HomeScreen from "../../components/09-useContext/HomeScreen";
import UserContext from "../../components/09-useContext/UserContext";

describe("Pruebas unitarias en el componente HomeScreen.js", () => {
  const user = {
    id: 1,
    name: "Carlos",
    email: "carlos.santander@gmail.com",
    password: "123456",
  };
  const setUser = jest.fn();
  /************************************************************************************/
  test("se debe mostrar el componente <HomeScreen /> correctamente", () => {
    const wrapper = mount(
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <Router>
          <HomeScreen />
        </Router>
      </UserContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
