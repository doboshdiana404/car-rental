import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../configApi/api';

export const fetchCars = createAsyncThunk('cars/fetchCars', async (page = 1, thunkAPI) => {
  try {
    const response = await api.get(`/cars?page=${page}&limit=12`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});
