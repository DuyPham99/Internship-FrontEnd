import { createSlice } from '@reduxjs/toolkit';

export const contractSlice = createSlice({
  name: 'contract',
  initialState: {
    value: false
  },
  reducers: {
    showPopup: state => {
      state.value = !state.value;
    }
  }
});
// Action creators are generated for each case reducer function
export const { showPopup } = contractSlice.actions;

export default contractSlice.reducer;
