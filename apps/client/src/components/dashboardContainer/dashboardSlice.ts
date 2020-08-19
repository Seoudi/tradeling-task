import { createSlice } from "@reduxjs/toolkit";
import { RepositoryDTO } from "./IRepository";
import { UserDTO } from "./IUser";

export const slice = createSlice({
  name: "dashboard",
  initialState: {
    items: [],
  },
  reducers: {
    updateItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { updateItems } = slice.actions;

export const selectItems = (state: {
  dashboard: { items: Array<RepositoryDTO | UserDTO> };
}) => state.dashboard.items;

export default slice.reducer;
