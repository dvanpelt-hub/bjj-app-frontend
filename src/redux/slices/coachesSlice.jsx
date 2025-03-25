import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllCoaches = createAsyncThunk(
  "coaches/getAllCoaches",
  async (thunkAPI) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/v1/users/public/get_all_coaches`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(
          errorData || "Failed to retrieve coaches"
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Network error");
    }
  }
);

const coachesSlice = createSlice({
  name: "coaches",
  initialState: { coaches: [], loading: false, error: null },
  reducers: {
    clearCoaches: (state) => {
      state.coaches = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCoaches.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(getAllCoaches.fulfilled, (state, action) => {
      state.loading = false
      state.coaches = action.payload;
    }).addCase(getAllCoaches.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Something went wrong";
    })
  }
});

export const { clearCoaches } = coachesSlice.actions;
export default coachesSlice.reducer;
