import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDataFromApi } from '../utils/apiHelper';
import type { User } from './types.js'; 

interface ApiState {
  data: User[];
  loading: boolean;
  error: string | null;
}

const initialState: ApiState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk<User[], string>(
  'api/fetchData',
  async (endpoint: string) => {
    const data = await fetchDataFromApi(endpoint);
    return data;
  }
);
const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchData.fulfilled, (state, action) => {
          state.data = action.payload;
          state.loading = false;
        })
        .addCase(fetchData.rejected, (state, action) => {
          state.error = action.error.message || 'Failed to fetch data';
          state.loading = false;
        });
    },
  });
  
  export default apiSlice.reducer;
