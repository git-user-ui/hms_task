import { configureStore } from '@reduxjs/toolkit';

import doctorsReducer from './slices/doctorsSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    auth: authReducer,
  },
});
