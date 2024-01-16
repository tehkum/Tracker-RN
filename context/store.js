import {configureStore, combineReducers} from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import {contactSlice} from './features/contactSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'tracker',
  storage: AsyncStorage,
  timeout: 10000,
  blacklist: ['contact'],
};

const rootReducer = combineReducers({
  contact: contactSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
