import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSelectedCoach = createAsyncThunk("selectedCoach/getSelectedCoach",
  async (username, thunkAPI) => {
    try {
      const access_token = localStorage.getItem("access_token");
      const response = await fetch(`https://sick-bjj-app.onrender.com/api/v1/users/authorised/coach/${username}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${access_token}`
          },
        }
      )
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
  initialState: {coach: [], loading: false, error: null},
  reducers: {
    clearSelectedCoach: (state) => {
      state.selectedCoach = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSelectedCoach.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(getSelectedCoach.fulfilled, (state, action) => {
      state.loading = false;
      state.selectedCoach.coach = action.payload;
    }).addCase(getSelectedCoach.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Something went wrong";
    })
  }
});

export const { clearSelectedCoach } = selectedCoachSlice.actions;
export default selectedCoachSlice.reducer
