import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCoach: {}, // Default coach info
};

const selectedCoachSlice = createSlice({
  name: "selectedCoach",
  initialState,
  reducers: {
    setSelectedCoach: (state, action) => {
      state.selectedCoach = action.payload;
    },
    clearSelectedCoach: (state) => {
      state.selectedCoach = {};
    },
  },
});

export const { setSelectedCoach, clearSelectedCoach } =
  selectedCoachSlice.actions;
export default selectedCoachSlice.reducer
