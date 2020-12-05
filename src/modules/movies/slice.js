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
  async ({ attributes, files }, thunkAPI) => {
    try {
      const response = await moviesApi.create(attributes)
      await moviesApi.upload(response.data.id, files)
    } catch (error) {
      thunkAPI.rejectWithValue(false)
    }
  }
)

export const removeMovie = createAsyncThunk(
  'movies/delete',
  async ({ id }, thunkAPI) => {
    try {
      const response = await moviesApi.remove(id)
      return response.data
    } catch (error) {
      thunkAPI.rejectWithValue(false)
    }
  }
)

export const updateMovie = createAsyncThunk(
  'movies/update',
  async ({ data }, thunkAPI) => {}
)

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    isLoading: false,
    movies: null,
    movie: null,
    count: 0,
  },
  reducers: {},
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.isLoading = true
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.movies = action.payload
    },
    [fetchMovie.pending]: (state) => {
      state.isLoading = true
    },
    [fetchMovie.fulfilled]: (state, action) => {
      state.isLoading = false
      state.movie = action.payload
    },
    [removeMovie.fulfilled]: (state, action) => {
      const index = state.movies.items.findIndex((movie) => {
        return movie.id === action.payload.id
      })
      state.movies.items.splice(index, 1)
    },
  },
})

export default moviesSlice.reducer
