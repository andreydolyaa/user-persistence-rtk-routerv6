import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/axios";

export const signUp = createAsyncThunk("user/signUp", async (userData) => {
  const response = await api.post("/auth/signup", userData);
  return response.data;
});

export const login = createAsyncThunk("user/login", async (userData) => {
  const response = await api.post("/auth/signin", userData);
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: { user: null, loading: false, error: null },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.user;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        // TODO: Missing error messages
        state.loading = false;
        state.error = action.error.message;
        state.user = null;
      });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
