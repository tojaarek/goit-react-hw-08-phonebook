import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isEditing: false,
};

const editSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    setEdit(state) {
      state.isEditing = true;
    },
  },
});

export const { setEdit } = editSlice.actions;
export const editReducer = editSlice.reducer;
