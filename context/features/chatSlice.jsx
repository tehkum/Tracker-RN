import {createSlice} from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    status: 'idle',
    chats: [],
    selectedChat: null,
    messages: [],
  },
  reducers: {},
  extraReducers: builders => {
    
  },
});
