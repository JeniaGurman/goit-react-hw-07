import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

const INITAL_STATE = {
  items: [],
  isLoading: false,
  isError: null
 
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITAL_STATE,
  extraReducers: (builder) => 
    builder
  .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
  .addCase(addContact.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
  .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter((item) => item.id !== action.payload)
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
});




export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts],
  (Contacts, Filter) => {
    console.log(Contacts, Filter);
    return Contacts.filter(contact =>
      contact.name.toLowerCase().includes(Filter.toLowerCase())
    );
  }
);