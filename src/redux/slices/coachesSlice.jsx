import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coaches: [], // Default list of coaches
};

const coachesSlice = createSlice({
  name: "coaches",
  initialState,
  reducers: {
    setCoaches: (state, action) => {
      state.coaches = action.payload;
    },
    clearCoaches: (state) => {
      state.coaches = {};
    },
  },
});

export const { setCoaches, clearSelectedCoach } = coachesSlice.actions;
export default coachesSlice.reducer
