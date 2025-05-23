import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

const initialState = {
  snippets: [],
  loading: false,
  error: null,
};


// Fetch all snippets
export const getAllSnippets = createAsyncThunk(
  'snippet/getAllSnippets',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get('/snippets');
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || 'Failed to fetch snippets');
    }
  }
);


// Create a new snippet
export const createSnippet = createAsyncThunk(
  'snippet/createSnippet',
  async (snippetData, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const res = await api.post('/snippets', snippetData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || 'Error creating snippet');
    }
  }
);

const snippetSlice = createSlice({
  name: 'snippets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllSnippets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllSnippets.fulfilled, (state, action) => {
        state.loading = false;
        state.snippets = action.payload;
      })
      .addCase(getAllSnippets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(createSnippet.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSnippet.fulfilled, (state, action) => {
        state.loading = false;
        state.snippets.push(action.payload);
      })
      .addCase(createSnippet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default snippetSlice.reducer;
