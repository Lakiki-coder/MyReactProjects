import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import vendorReducer from './slices/vendorSlice'
import weddingReducer from './slices/weddingSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    vendor: vendorReducer,
    wedding: weddingReducer
  }
})

export default store