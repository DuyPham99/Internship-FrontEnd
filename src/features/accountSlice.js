import { createSlice } from '@reduxjs/toolkit';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    value: ''
  },
  reducers: {
    loginState: (state, action) => {
      state.value = action.payload;
    }
  }
});
// Action creators are generated for each case reducer function
export const { loginState } = accountSlice.actions;

export default accountSlice.reducer;
