import { createSelector } from "@reduxjs/toolkit";
import { selectFilterTxt } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterTxt],
  (contacts, txtFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(txtFilter.toLowerCase())
    );
  }
);
