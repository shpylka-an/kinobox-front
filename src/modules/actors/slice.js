import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { actorsApi } from './api'

export const fetchActors = createAsyncThunk(
  'actors/all',
  async (_, thunkAPI) => {
    try {
      const response = await actorsApi.getAll()
      return response.data
    } catch (err) {
      return thunkAPI.rejectWithValue(false)
    }
  }
)

export const createActor = createAsyncThunk(
  'actors/create',
  async ({actor}, thunkAPI) => {
    try {
      const response = await actorsApi.create(actor)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(false)
    }
  }
)

export const updateActor = createAsyncThunk(
  'actors/update',
  async ({id, actor}, thunkAPI) => {
    try {
      const response = await actorsApi.update(id, actor)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(false)
    }
  }
)

export const deleteActor = createAsyncThunk(
  'actors/delete',
  async ({id}, thunkAPI) => {
    try {
      const response = await actorsApi.remove(id)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(false)
    }
  }
)

const actorsSlice = createSlice({
  name: 'actors',
  initialState: {
    isLoading: false,
    actors: [],
  },
  reducers: {},
  extraReducers: {
    [fetchActors.pending]: (state) => {
      state.isLoading = true
    },
    [fetchActors.fulfilled]: (state, action) => {
      state.isLoading = false
      state.actors = action.payload
    },
  },
})

export default actorsSlice.reducer
