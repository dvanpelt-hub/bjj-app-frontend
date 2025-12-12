import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// thunk for loggin in
export const loginUser = createAsyncThunk(
  "auth/loginUser", // prefix used for action type (below in extra reducer section)
  async (credentials, thunkAPI) => {
    try {
      const response = await fetch('https://sick-bjj-app.onrender.com/api/v1/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData || "Login failed");
      }
      const data = await response.json();
      console.log('data', data)
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Network error");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    username: null,
    user_id: null,
    access_token: localStorage.getItem("access_token") || null, // persist across refresh
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.username = null;
      state.user_id = null;
      state.access_token = null;
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user.email;
        state.username = action.payload.username;
        state.user_id = action.payload.user.user_id;
        state.access_token = action.payload.access_token;
        // storing jwt and user to local (persists across browser sessions)
        localStorage.setItem("access_token", action.payload.access_token);
        localStorage.setItem("user", JSON.stringify(action.payload.user.email));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { logout, setToken } = authSlice.actions;
export default authSlice.reducer;
