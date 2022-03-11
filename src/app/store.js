import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import contractReducer from '../features/counter/contractSlice'

export default configureStore({
  reducer: {
    contract: contractReducer
  }
})
