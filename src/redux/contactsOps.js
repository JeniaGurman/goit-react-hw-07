import { getContacs } from "../services/Api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
        const { data } = await getContacs();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkApi) => {
        try {
            const { data } = await addContact();
        return data;
    
        } catch (error) {
          return thunkApi.rejectWithValue(error.message);  
        }
    }
)
export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkApi) => {
        try {
            const { data } = await deleteContact(contactId);
        return data;
    
        } catch (error) {
          return thunkApi.rejectWithValue(error.message);  
        }
    }
)
