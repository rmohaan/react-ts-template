import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './apiSlice';
import configReducer from './configSlice';

const store = configureStore({
  reducer: {
    api: apiReducer,
    config: configReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
