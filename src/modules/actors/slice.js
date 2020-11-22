import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { actorsApi } from './api'

export const fetchActors = createAsyncThunk(
  'actors/all',
  async (_, thunkAPI) => {
    try {
      const response = await actorsApi.fetchAll()
      return response.data
    } catch (err) {
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
      console.log(action)
      state.isLoading = false
      state.actors = action.payload
    },
  },
})

export default actorsSlice.reducer
