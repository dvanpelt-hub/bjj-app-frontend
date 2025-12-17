import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSelectedCoach = createAsyncThunk(
  "selectedCoach/getSelectedCoach",
  async (username, thunkAPI) => {
    try {
      const access_token = localStorage.getItem("access_token");
      const response = await fetch(
        `https://sick-bjj-app.onrender.com/api/v1/users/authorised/coach/${username}`,
        // `http://127.0.0.1:8000/api/v1/users/authorised/coach/${username}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(
          errorData || "Failed to retrieve coach"
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Network error");
    }
  }
);

const selectedCoachSlice = createSlice({
  name: "selectedCoach",
  initialState: { coach: {}, loading: false, error: null },
  reducers: {
    clearSelectedCoach: (state) => {
      state.selectedCoach = [];
    },
    setSelectedCoach: (state, action) => {
      state.coach = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSelectedCoach.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSelectedCoach.fulfilled, (state, action) => {
        state.loading = false;
        state.coach = action.payload;
      })
      .addCase(getSelectedCoach.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { clearSelectedCoach, setSelectedCoach } = selectedCoachSlice.actions;
export default selectedCoachSlice.reducer;
