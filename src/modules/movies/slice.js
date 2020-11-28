import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { moviesApi } from './api'

export const fetchMovies = createAsyncThunk(
  'movies/all',
  async ({ queryParams = {} }, thunkAPI) => {
    try {
      const response = await moviesApi.fetchAll(queryParams)
      return response.data
    } catch (error) {
      thunkAPI.rejectWithValue(false)
    }
  }
)

export const fetchMovie = createAsyncThunk(
  'movies/one',
  async ({ id }, thunkAPI) => {
    try {
      const response = await moviesApi.getOne(id)
      return response.data
    } catch (error) {
      thunkAPI.rejectWithValue(false)
    }
  }
)

export const createMovie = createAsyncThunk(
  'movies/create',
  async ({attributes, files}, thunkAPI) => {
    try {
      const response = await moviesApi.create(attributes)
      await moviesApi.upload(response.data.id, files)
    } catch (error) {
      thunkAPI.rejectWithValue(false)
    }
  }
)

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    isLoading: false,
    movies: [],
    movie: null,
    count: 0,
  },
  reducers: {},
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.isLoading = true
    },
    [fetchMovies.fulfilled]: (state, action) => {
      const { items, count } = action.payload
      state.movies = items
      state.count = count
    },
    [fetchMovie.pending]: (state) => {
      state.isLoading = true
    },
    [fetchMovie.fulfilled]: (state, action) => {
      state.isLoading = false
      state.movie = action.payload
    }
  },
})

export default moviesSlice.reducer
