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

export const fetchMoviesList = createAsyncThunk(
  'movies/list',
  // eslint-disable-next-line
  async ({}, thunkAPI) => {
    try {
      const response = await moviesApi.getList()
      return response.data
    } catch (error) {
      thunkAPI.rejectWithValue(false)
    }
  }
)

export const searchMovies = createAsyncThunk(
  'movies/search',
  // eslint-disable-next-line
  async ({ queryParams = {} }, thunkAPI) => {
    try {
      const response = await moviesApi.fetchAll(queryParams)
      return response.data
    } catch (error) {
      thunkAPI.rejectWithValue(false)
    }
  }
)

export const addToList = createAsyncThunk(
  'movies/addToList',
  async ({ id }, thunkAPI) => {
    try {
      const response = await moviesApi.addToList(id)
      thunkAPI.dispatch(fetchMoviesList({}))
      return response.data
    } catch (error) {
      thunkAPI.rejectWithValue(false)
    }
  }
)

export const removeFromList = createAsyncThunk(
  'movies/removeFromList',
  async ({ id }, thunkAPI) => {
    try {
      const response = await moviesApi.removeFromList(id)
      thunkAPI.dispatch(fetchMoviesList({}))
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
    listLoading: false,
    moviesList: null,
    movie: null,
    search: '',
    searchList: null,
    count: 0,
  },
  reducers: {
    setSearch(state, action) {
      state.search = action.payload
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.isLoading = true
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.movies = action.payload
    },
    [searchMovies.pending]: (state) => {
      //state.isLoading = true
    },
    [searchMovies.fulfilled]: (state, action) => {
      state.searchList = action.payload
    },
    [fetchMoviesList.fulfilled]: (state, action) => {
      state.moviesList = action.payload
      state.listLoading = false
    },
    [fetchMoviesList.pending]: (state) => {
      state.listLoading = true
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

export const { setSearch } = moviesSlice.actions
export default moviesSlice.reducer
