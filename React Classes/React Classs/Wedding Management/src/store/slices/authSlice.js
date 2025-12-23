import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
      state.loading = false
    },
    logout: (state) => {
      state.user = null
      state.token = null
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  }
})

export const { loginSuccess, logout, setLoading } = authSlice.actions
export default authSlice.reducer