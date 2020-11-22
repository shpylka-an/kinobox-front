import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { directorsApi } from './api'

export const fetchDirectors = createAsyncThunk(
  'directors/all',
  async (_, thunkAPI) => {
    try {
      const response = await directorsApi.fetchAll()
      return response.data
    } catch (err) {
      return thunkAPI.rejectWithValue(false)
    }
  }
)

const directorsSlice = createSlice({
  name: 'directors',
  initialState: {
    isLoading: false,
    directors: [],
  },
  reducers: {},
  extraReducers: {
    [fetchDirectors.pending]: (state) => {
      state.isLoading = true
    },
    [fetchDirectors.fulfilled]: (state, action) => {
      state.isLoading = false
      state.directors = action.payload
    },
  },
})

export default directorsSlice.reducer
