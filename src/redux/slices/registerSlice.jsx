import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const registerNewUser = createAsyncThunk(
  "register/registerNewUser", // prefix used for action type (below in extra reducer section)
  async (userInfo, thunkAPI) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/users/create_user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userInfo.email,
          password: userInfo.password,
          role: userInfo.role,
          username: userInfo.username,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(
          errorData || "Failed to register new user."
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Network error");
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState: {
    email: null,
    role: null,
    username: null,
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder.addCase(registerNewUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(registerNewUser.fulfilled, (state, action) => {
      state.loading = false;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.role = action.payload.role;
    }).addCase(registerNewUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Something went wrong";
    })
  }
});

export default registerSlice.reducer;