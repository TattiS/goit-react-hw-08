import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};
const handleRejection = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};
const resetFlags = (state) => {
  state.loading = false;
  state.error = null;
};

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
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
      .addCase(deleteContact.rejected, handleRejection);
  },
});

export default slice.reducer;
