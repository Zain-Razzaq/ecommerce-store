import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import createStore, { Provider } from "./data/store";
import reducer from "./data/reducers";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AddItemPage from "./pages/AddItemPage";
import EditPage from "./pages/EditPage";

function App() {
  const [store, setStore] = useState(createStore(reducer));

  function dispatch(action) {
    setStore(reducer(store, action));
  }

  return (
    <Provider store={{ store, dispatch }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddItemPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
