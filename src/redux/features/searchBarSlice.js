import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showBar: false,
};

const searchBarSlice = createSlice({
  name: "searchBarState",
  initialState,
  reducers: {
    searchBarSliceData: (state, action) => {
      state.showBar = action.payload.showBar;
    },
  },
});

export const { searchBarSliceData } = searchBarSlice.actions;
export default searchBarSlice.reducer;
