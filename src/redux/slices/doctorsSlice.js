import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';
import { ENDPOINTS } from '../../constants/api';
import { STORAGE_KEYS } from '../../constants/storageKeys';
import { normalizeError } from '../../utils/errorHandler';

export const fetchDoctors = createAsyncThunk(
  'doctors/fetchDoctors',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { data } = await api.get(ENDPOINTS.DOCTORS);

      const favoriteIds = getState().doctors.favoriteIds;

      return data.map(doctor => ({
        ...doctor,
        isFavorite: favoriteIds.includes(String(doctor.id)),
      }));
    } catch (error) {
      return rejectWithValue(normalizeError(error));
    }
  },
);

export const loadFavorites = createAsyncThunk(
  'doctors/loadFavorites',
  async (_, { rejectWithValue }) => {
    try {
      const stored = await AsyncStorage.getItem(
        STORAGE_KEYS.FAVORITE_DOCTOR_IDS,
      );
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      return rejectWithValue(normalizeError(error));
    }
  },
);

const persistFavorites = async favoriteIds => {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEYS.FAVORITE_DOCTOR_IDS,
      JSON.stringify(favoriteIds),
    );
  } catch (error) {
    console.log('Failed to persist favorites', error);
  }
};

export const toggleFavoriteDoctor = createAsyncThunk(
  'doctors/toggleFavoriteDoctor',
  async (doctorId, { getState }) => {
    const id = String(doctorId);
    const { favoriteIds } = getState().doctors;

    const nextFavoriteIds = favoriteIds.includes(id)
      ? favoriteIds.filter(favoriteId => favoriteId !== id)
      : [...favoriteIds, id];

    await persistFavorites(nextFavoriteIds);

    return nextFavoriteIds;
  },
);

const initialState = {
  list: [],
  favoriteIds: [],
  loading: false,
  error: null,
  favoritesLoaded: false,
};

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
    clearDoctorsError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      // fetchDoctors
      .addCase(fetchDoctors.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message ?? 'Something went wrong';
      })

      // loadFavorites
      .addCase(loadFavorites.fulfilled, (state, action) => {
        state.favoriteIds = action.payload;
        state.favoritesLoaded = true;
      })
      .addCase(loadFavorites.rejected, state => {
        state.favoritesLoaded = true;
      })

      .addCase(toggleFavoriteDoctor.fulfilled, (state, action) => {
        state.favoriteIds = action.payload;
        state.list = state.list.map(doctor => ({
          ...doctor,
          isFavorite: state.favoriteIds.includes(String(doctor.id)),
        }));
      });
  },
});

export const { clearDoctorsError } = doctorsSlice.actions;

export const selectDoctors = state => state.doctors.list;
export const selectDoctorsLoading = state => state.doctors.loading;
export const selectDoctorsError = state => state.doctors.error;
export const selectFavoriteDoctors = state =>
  state.doctors.list.filter(doctor => doctor.isFavorite);

export default doctorsSlice.reducer;
