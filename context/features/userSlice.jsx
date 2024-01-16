import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: 'idle',
    users: [],
    selectedUser: null,
    messages: [],
  },
  reducers: {},
  extraReducers: builders => {},
});
