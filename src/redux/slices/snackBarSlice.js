import { createSlice } from '@reduxjs/toolkit';

const snackBarSlice = createSlice({
  name: 'snackbar',
  initialState: {
    visible: false,
    message: '',
    type: 'Success',
  },

  reducers: {
    showSnackbar: (state, action) => {
      state.visible = true;
      state.message = action.payload.message;
      state.type = action.payload.type || 'success';
    },

    hideSnackbar: state => {
      state.visible = false;
      state.message = '';
    },
  },
});

export const { showSnackbar, hideSnackbar } = snackBarSlice.actions;
export default snackBarSlice.reducer;
