import { createSlice } from "@reduxjs/toolkit";

export const selectFilterTxt = (state) => state.filters.name;
const slice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;
