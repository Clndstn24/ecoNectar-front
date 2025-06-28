import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '../services/authService';

const initialState = {
    user: {
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
        city: '',
        postalCode: '',
        isAuthenticated: false,
        role: 'USER',             
    }
};

// Async thunks
export const loginUser = createAsyncThunk(
    'user/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            await authService.login(email, password);
            // Después del login exitoso, obtener la información del usuario
            const userData = await authService.getCurrentUser();
            
            // Mapear los datos del backend al formato esperado por el frontend
            const mappedUser = {
                email: userData.email,
                firstName: userData.firstName,
                lastName: userData.lastName,
                phoneNumber: userData.phoneNumber,
                address: userData.address,
                city: userData.city,
                postalCode: userData.postalCode,
                role: userData.role || 'USER',
                isAuthenticated: true
            };
            
            return mappedUser;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getCurrentUser = createAsyncThunk(
    'user/getCurrentUser',
    async (_, { rejectWithValue }) => {
        try {
            console.log('getCurrentUser - iniciando petición...');
            const userData = await authService.getCurrentUser();
            console.log('getCurrentUser - datos recibidos del servicio:', userData);
            
            // Mapear los datos del backend al formato esperado por el frontend
            const mappedUser = {
                id: userData.id || userData.email, // Usar email como ID si no hay ID
                email: userData.email,
                firstName: userData.firstName,
                lastName: userData.lastName,
                phoneNumber: userData.phoneNumber,
                address: userData.address,
                city: userData.city,
                postalCode: userData.postalCode,
                role: userData.role || 'USER',
                isAuthenticated: true
            };
            
            console.log('getCurrentUser - datos mapeados:', mappedUser);
            return mappedUser;
        } catch (error) {
            console.log('getCurrentUser - error:', error.message);
            return rejectWithValue(error.message);
        }
    }
);

export const registerUser = createAsyncThunk(
    'user/register',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await authService.register(userData);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const logoutUser = createAsyncThunk(
    'user/logout',
    async (_, { rejectWithValue }) => {
        try {
            await authService.logout();
            return null;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        ...initialState,
        loading: false,
        error: null,
    },
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        clearUser: (state) => {
            state.user = initialState.user;
        },
    },
    extraReducers: (builder) => {
        builder
            // Login
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.user = initialState.user;
            })
            // Get current user
            .addCase(getCurrentUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(getCurrentUser.rejected, (state, action) => {
                console.log('getCurrentUser.rejected - error:', action.payload);
                state.loading = false;
                state.error = action.payload;
                state.user = initialState.user;
            })
            // Register
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = { ...action.payload, isAuthenticated: true };
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Logout
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = initialState.user;
                state.error = null;
            });
    },
})
export const { clearError, clearUser } = userSlice.actions;
export default userSlice.reducer;