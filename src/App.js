import React, { useState } from "react";

import createStore, { Provider } from "./data/store";
import reducer from "./data/reducers";

import NavBar from "./components/NavBar";
import AllRoutes from "./AllRoutes";

function App() {
  const [store, setStore] = useState(createStore(reducer));

  function dispatch(action) {
    setStore(reducer(store, action));
  }

  return (
    <Provider store={{ store, dispatch }}>
      <NavBar />
      <AllRoutes />
    </Provider>
  );
}

export default App;
