import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            id: null,
            username: '',
            email: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            city: '',
            postalCode: '',
            role: 'USER',             
        },
        loading: false,
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = {
                id: null,
                username: '',
                email: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                address: '',
                city: '',
                postalCode: '',
                role: 'USER',
            };
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