import { createSlice } from '@reduxjs/toolkit';
import { fetchCarById, fetchCars } from './operations';

const carsSlice = createSlice({
  name: 'cars',

  initialState: {
    cars: [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    loading: false,
    error: null,
    page: -1,
    totalPages: 1,
    filters: {
      brand: '',
      maxPrice: '',
      minMileage: '',
      maxMileage: '',
    },
    selectedCar: null,
  },
  reducers: {
    resetCars: state => {
      state.cars = [];
      state.page = 1;
      state.totalPages = 1;
      state.error = null;
      state.loading = false;
    },
    setBrand: (state, action) => {
      state.filters.brand = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.filters.maxPrice = action.payload;
    },
    setMinMileage: (state, action) => {
      state.filters.minMileage = action.payload;
    },
    setMaxMileage: (state, action) => {
      state.filters.maxMileage = action.payload;
    },
    toggleFavorite(state, action) {
      const carId = action.payload;
      if (state.favorites.includes(carId)) {
        state.favorites = state.favorites.filter(id => id !== carId);
      } else {
        state.favorites.push(carId);
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },

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

        const incomingCars = Array.isArray(action.payload.cars) ? action.payload.cars : [];

        const filteredCars = action.payload.maxPrice ? incomingCars.filter(car => Number(car.rentalPrice) <= Number(action.payload.maxPrice)) : incomingCars;

        const newCars = filteredCars.filter(newCar => !state.cars.some(existing => existing.id === newCar.id));

        state.cars = [...state.cars, ...newCars];
        if (filteredCars.length < 12) {
          state.totalPages = state.page;
        }
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCarById.pending, state => {
        state.loading = true;
        state.error = null;
        state.selectedCar = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCar = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
export const { resetCars, setBrand, setMaxPrice, setMaxMileage, setMinMileage, toggleFavorite } = carsSlice.actions;
