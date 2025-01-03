import {createReducer} from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,

};

export const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase('LoadUserRequest', (state) => {
            state.loading = true;
        })
        .addCase('LoadUserSuccess', (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        })
        .addCase('LoadUserFailure', (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
            state.user = null;
        })
        .addCase('clearErrors', (state) => {
            state.error = null;
        });
});