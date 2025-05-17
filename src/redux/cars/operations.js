import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../configApi/api';

export const fetchCars = createAsyncThunk('cars/fetchCars', async ({ page = 1, brand = '', maxPrice = '' }, thunkAPI) => {
  try {
    const params = { page, limit: 12 };
    if (brand && brand !== 'all') params.brand = brand;

    const { data } = await api.get('/cars', { params });

    const { cars, totalPages } = Array.isArray(data) ? { cars: data, totalPages: 1 } : data;

    const filteredCars = maxPrice ? cars.filter(car => Number(car.rentalPrice) === Number(maxPrice)) : cars;

    return { cars: filteredCars, page, totalPages };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
