import { createStore, compose, applyMiddleware } from "redux";

import reducers from "./reducers";

// Para poder verificar qualquer alteração feita na aplicação atravez do reactotron
const composer =
  process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(...[]),
        console.tron.createEnhancer()
      )
    : applyMiddleware(...[]);

const store = createStore(reducers, composer);

export default store;
