import { configureStore } from '@reduxjs/toolkit'
import contractReducer  from '../features/contractSlice';
import createContractReducer  from '../features/contractFormSlice';
import accountReducer  from '../features/accountSlice';

export default configureStore({
  reducer: {
    contract: contractReducer,
    createContract: createContractReducer,
    account: accountReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
