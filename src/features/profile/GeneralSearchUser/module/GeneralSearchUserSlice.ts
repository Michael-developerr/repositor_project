import { createSlice } from '@reduxjs/toolkit';

export interface SearchingUser {
    hasSearched: boolean;
}

const initialState: SearchingUser = {
    hasSearched: false,
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setHasSearched: (
            state,
            action: { payload: boolean },
        ) => {
            state.hasSearched = action.payload;
        },
    },
});

export const { setHasSearched } = searchSlice.actions;

export default searchSlice.reducer;
