import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./core/store"; // Your actual Redux store

import App from "./App";

test("renders main heading", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const heading = screen.getByRole("heading", {
    name: /Create your own address book!/i,
  });
  expect(heading).toBeInTheDocument();
});
