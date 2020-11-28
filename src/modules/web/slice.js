import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { webApi } from './api'

export const fetchSuggestedMovies = createAsyncThunk(
  'web/suggested',
  async (_, thunkAPI) => {
    try {
      const response = await webApi.fetchSuggestedMovies()
      return response.data
    } catch (error) {
      thunkAPI.rejectWithValue(false)
    }
  }
)

export const fetchSelectedMovie = createAsyncThunk(
  'web/selected',
  async ({id}, thunkAPI) => {
    try {
      const response = await webApi.fetchSelectedMovie(id)
      return response.data
    } catch (error) {
      thunkAPI.rejectWithValue(false)
    }
  }
)

const webSlice = createSlice({
  name: 'web',
  initialState: {
    isLoading: false,
    suggestedMovies: [],
    selectedMovie: null
  },
  reducers: {},
  extraReducers: {
    [fetchSuggestedMovies.pending]: (state) => {
      state.isLoading = true
    },
    [fetchSuggestedMovies.fulfilled]: (state, action) => {
      state.isLoading = false
      state.suggestedMovies = action.payload
    },
    [fetchSelectedMovie.pending]: (state) => {
      state.isLoading = true
    },
    [fetchSelectedMovie.fulfilled]: (state, action) => {
      state.isLoading = false
      state.selectedMovie = action.payload
    }
  }
})

export default webSlice.reducer
