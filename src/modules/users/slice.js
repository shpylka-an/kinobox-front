import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { usersApi } from './api'

export const fetchUsers = createAsyncThunk(
  'users/all',
  async ({queryParams = {}}, thunkAPI) => {
    try {
      const response = await usersApi.fetchAll(queryParams)
      return response.data
    } catch (error) {
      thunkAPI.rejectWithValue(false)
    }
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: null
  },
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload
    }
  }
})

export default usersSlice.reducer
