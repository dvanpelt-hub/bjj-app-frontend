import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  specialty: "", // Default filter value
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.specialty = action.payload; // Update the search query
    },
    clearFilter: (state) => {
      state.specialty = ""; // Reset the filter
    },
  },
});

export const { setFilter, clearFilter } = filterSlice.actions;
export default filterSlice.reducer;
