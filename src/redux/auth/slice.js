import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { login, logout, refreshUser, register } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejection = (state, action) => {
  state.isLoading = false;
  state.isRefreshing = false;
  state.error = action.payload;
  toast.error(action.payload);
};

const slice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, handleRejection)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, handleRejection)
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, handleRejection)
      .addCase(refreshUser.pending, (state) => {
        state.isLoading = false;
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, handleRejection);
  },
});

export default slice.reducer;
