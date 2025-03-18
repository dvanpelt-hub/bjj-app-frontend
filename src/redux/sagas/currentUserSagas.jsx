import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// async thunk to fetch students
const fetchUsers = createAsyncThunk(
  "currentUser/fetchUsers", // Action type
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/v1/users");
      console.log(response)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch users");
    }
  }
);

export default fetchUsers