import React from "react";

import "./config/ReactotronConfig";

import { Provider } from "react-redux";

import store from "./store";

import Todos from "./TodoList";

console.tron.log("Testando");

const App = () => (
  <Provider store={store}>
    <Todos />
  </Provider>
);

export default App;
