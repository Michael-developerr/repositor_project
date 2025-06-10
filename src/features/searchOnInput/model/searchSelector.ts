import { RootState } from './../../../app/provider/redux-provider';

export const getValue = (state: RootState) =>
    state.valueSearch.inputValue;
