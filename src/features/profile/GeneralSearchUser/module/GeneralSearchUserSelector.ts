import { RootState } from '../../../../app/provider/redux-provider';

export const hasSearchedSel = (state: RootState) =>
    state.search.hasSearched;
