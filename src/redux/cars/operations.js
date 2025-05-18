import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../configApi/api';

export const fetchCars = createAsyncThunk('cars/fetchCars', async ({ page = 1, brand = '', maxPrice = '', minMileage = '', maxMileage = '' }, thunkAPI) => {
  try {
    const params = { page, limit: 12 };
    if (brand && brand !== 'all') params.brand = brand;
    if (maxPrice) params.rentalPrice_lte = maxPrice;
    if (minMileage) params.maxMileage = minMileage;
    if (maxMileage) params.maxMileage = maxMileage;

    const { data } = await api.get('/cars', { params });

    const { cars, totalPages } = Array.isArray(data) ? { cars: data, totalPages: 1 } : data;

    return { cars, page, totalPages, maxPrice };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCarById = createAsyncThunk('cars/fetchCarById', async (id, thunkAPI) => {
  try {
    const { data } = await api.get(`/cars/${id}`);
    console.log(data);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
