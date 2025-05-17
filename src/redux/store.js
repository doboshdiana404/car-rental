import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './cars/slice';
import { brandsReducer } from './brands/slice';

export const store = configureStore({
  reducer: { cars: carsReducer, brands: brandsReducer },
});
