import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "itemsData",
  initialState: [],
  reducers: {
    itemsInitialized(state, action) {
      return action.payload;
    },
    itemDeletedByID(state, action) {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { itemDeletedByID, itemsInitialized } = slice.actions;
export default slice.reducer;
