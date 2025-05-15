import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../configApi/api';

export const fetchCars = createAsyncThunk('cars/fetchCars', async (_, thunkAPI) => {
  try {
    const { data } = await api.get('/cars');
    console.log(data.cars);
    return data.cars;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});
