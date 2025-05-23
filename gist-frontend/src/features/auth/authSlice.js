import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

const initialState = {
user: null,
token: localStorage.getItem('token') || null,
loading: false,
error: null,
};

export const loginUser = createAsyncThunk(
'auth/loginUser',
async (credentials, { rejectWithValue }) => {
try {
  const res = await api.post('/auth/login', credentials);
  return res.data;
} catch (err) {
  return rejectWithValue(err.response.data.error);
    }
  }
);

export const registerUser = createAsyncThunk(
'auth/registerUser',
async (userData, { rejectWithValue }) => {
try {
     const res = await api.post('/auth/register', userData);
     return res.data;
   } catch (err) {
  return rejectWithValue(err.response.data.error);
   }
  }
);

const authSlice = createSlice({
name: 'auth',
initialState,
reducers: {
logout: (state) => {
state.token = null;
state.user = null;
localStorage.removeItem('token');
},
},
extraReducers: (builder) => {
builder
.addCase(loginUser.pending, (state) => {
state.loading = true;
state.error = null;
})
.addCase(loginUser.fulfilled, (state, action) => {
state.loading = false;
state.token = action.payload.token;
state.user = action.payload.user;
localStorage.setItem('token', action.payload.token);
})
.addCase(loginUser.rejected, (state, action) => {
state.loading = false;
state.error = action.payload;
})
.addCase(registerUser.fulfilled, (state, action) => {
state.token = action.payload.token;
state.user = action.payload.user;
localStorage.setItem('token', action.payload.token);
});
},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;