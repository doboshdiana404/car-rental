import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    loading: false,
    error: null,
    page: 1,
    totalPages: 1,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.page = Number(action.payload.page);
        state.totalPages = Number(action.payload.totalPages);
        const newCars = action.payload.cars.filter(newCar => !state.cars.some(existingCar => existingCar.id === newCar.id));

        state.cars = [...state.cars, ...newCars];
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
