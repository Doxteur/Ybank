import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosInstance from '@/app/utils/axios';
import {
  AuthState,
  LoginCredentials,
  RegisterCredentials,
  AuthResponse,
} from './types';

// Thunks
export const login = createAsyncThunk<AuthResponse, LoginCredentials, { rejectValue: string }>(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post<AuthResponse>('/auth/login', credentials);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const register = createAsyncThunk<AuthResponse, RegisterCredentials, { rejectValue: string }>(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post<AuthResponse>('/auth/register', credentials);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axiosInstance.post('/auth/logout');
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error);
  }
  return null;
});

// Slice
const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(login.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload || 'Une erreur est survenue';
      })
      // Register
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(register.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload || 'Une erreur est survenue';
      })
      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = null;
        localStorage.removeItem('token');
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
