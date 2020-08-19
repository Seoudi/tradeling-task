import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "search",
  initialState: {
    searchType: "users",
    text: "",
  },
  reducers: {
    updateSearchType: (state, action) => {
      state.searchType = action.payload;
    },
    updateText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { updateSearchType, updateText } = slice.actions;

export const selectSearchType = (state: {
  search: { searchType: "users" | "repositories" };
}) => state.search.searchType;

export const selectText = (state: { search: { text: string } }) =>
  state.search.text;

export default slice.reducer;
