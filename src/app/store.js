import { configureStore } from '@reduxjs/toolkit'
import contractReducer  from '../features/contractSlice';
import createContractReducer  from '../features/contractFormSlice';

export default configureStore({
  reducer: {
    contract: contractReducer,
    createContract: createContractReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
