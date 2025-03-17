import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  specialty: "", // default filter value
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.specialty = action.payload; // update the search query
    },
    clearFilter: (state) => {
      state.specialty = ""; // reset the filter
    },
  },
});

export const { setFilter, clearFilter } = filterSlice.actions;
export default filterSlice.reducer;
