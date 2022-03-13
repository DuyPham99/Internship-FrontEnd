import { createSlice } from '@reduxjs/toolkit';

export const createContractSlice = createSlice({
  name: 'createContract',
  initialState: {
    value: []
  },
  reducers: {
    contractForm: (state, action) => {
      state.value = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { contractForm } = createContractSlice.actions;

export default createContractSlice.reducer;
