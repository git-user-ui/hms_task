import { configureStore } from '@reduxjs/toolkit';

import doctorsReducer from './slices/doctorsSlice';

export const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
  },
});
