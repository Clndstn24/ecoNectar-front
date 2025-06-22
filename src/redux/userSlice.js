import { createSlice } from '@reduxjs/toolkit';
const initialState = {
        user: {
            id: null,
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
const userSlice = createSlice({
    name: 'user',
    initialState: {
        ...initialState,
        loading: false,
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = initialState
            ;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
})
export const { setUser, clearUser, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;