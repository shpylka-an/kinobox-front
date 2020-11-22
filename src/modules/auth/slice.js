import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { authApi } from './api'

export const login = createAsyncThunk(
  'auth/login',
  async ({ credentials }, thunkAPI) => {
    try {
      const response = await authApi.login(credentials)
      const { accessToken, user } = response.data
      localStorage.setItem('token', accessToken)

      return user
    } catch (err) {
      let error = err
      if (!error.response) {
        throw err
      }
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
)

export const authCheck = createAsyncThunk(
  'auth/check',
  async (arg, thunkAPI) => {
    if (localStorage.getItem('token')) {
      try {
        const response = await authApi.me()
        return response.data
      } catch (err) {
        return thunkAPI.rejectWithValue(false)
      }
    }

    return thunkAPI.rejectWithValue(false)
  }
)

export const register = createAsyncThunk(
  'auth/register',
  async ({ registerData }, thunkAPI) => {
    try {
      const response = await authApi.register(registerData)
      const { accessToken, user } = response.data
      localStorage.setItem('token', accessToken)

      return user
    } catch (err) {
      let error = err
      if (!error.response) {
        throw err
      }
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
)

export const logout = createAsyncThunk(
  'auth/logout',
  async () => {
    localStorage.removeItem('token')
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    currentUser: null,
    errors: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true
    },
    [login.fulfilled]: (state, action) => {
      state.currentUser = action.payload
      state.isLoading = false
      state.isLoggedIn = true
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false
      state.errors = action.payload
    },
    [authCheck.fulfilled]: (state, action) => {
      state.isLoggedIn = true
      state.currentUser = action.payload
    },
    [authCheck.rejected]: (state) => {
      state.isLoggedIn = false
    },
    [register.pending]: (state) => {
      state.isLoading = true
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false
      state.user = action.payload
      state.isLoggedIn = true
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false
      state.errors = action.payload
    },
    [logout.fulfilled]: (state) => {
      state.isLoggedIn = false
      state.currentUser = null
    }
  },
})

export default authSlice.reducer

export const {} = authSlice.actions
