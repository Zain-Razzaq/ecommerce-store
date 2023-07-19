import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "searchText",
  initialState: "",
  reducers: {
    searchTextChanged(state, action) {
      return action.payload;
    },
  },
});

export const { searchTextChanged } = slice.actions;
export default slice.reducer;
