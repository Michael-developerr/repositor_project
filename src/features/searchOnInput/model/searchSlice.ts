import {
    createSlice,
    // PayloadAction,
} from '@reduxjs/toolkit';

export interface ValueState {
    inputValue: string;
}

const initialState: ValueState = {
    inputValue: '',
};

export const valueSlice = createSlice({
    name: 'value',
    initialState,
    reducers: {
        chengeValue: (state, action) => {
            state.inputValue = action.payload;
        },
    },
});
export const { actions: valueAction } = valueSlice;

export default valueSlice.reducer;
