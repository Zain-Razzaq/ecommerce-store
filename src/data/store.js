import { configureStore } from "@reduxjs/toolkit";

import itemsDataReducers from "./itemsData";
import searchTextReducers from "./searchText";

const store = configureStore({
  reducer: {
    itemsData: itemsDataReducers,
    searchText: searchTextReducers,
  },
});

export default store;
