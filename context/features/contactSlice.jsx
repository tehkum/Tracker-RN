import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Contacts from 'react-native-contacts';

export const fetchContacts = createAsyncThunk('contact/fetchContacts', async () => {
  const contacts = await Contacts.getAll();
  return contacts;
});

export const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [],
    selectedContact: null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: builders => {
    builders.addCase('contact/fetchContacts/pending', (state, action) => {
      state.status = 'loading';
    });
    builders.addCase('contact/fetchContacts/fulfilled', (state, action) => {
      state.status = 'succeeded';
      state.contacts = action.payload;
    });
    builders.addCase('contact/fetchContacts/rejected', (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const {} = contactSlice.actions;
