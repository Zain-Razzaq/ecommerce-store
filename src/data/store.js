import React, { createContext } from "react";

export const storeContext = createContext();

export function Provider({ children, store }) {
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
}

function createStore(reducer) {
  return reducer(undefined, {});
}

export default createStore;
