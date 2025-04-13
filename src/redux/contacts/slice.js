import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logout } from "../auth/operations";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejection = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const resetFlags = (state) => {
  state.isLoading = false;
  state.error = null;
};

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        resetFlags(state);
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejection)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        resetFlags(state);
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejection)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        resetFlags(state);
        state.items = state.items.filter(
          (item) => item.id != action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejection)
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export default slice.reducer;
