import { configureStore } from '@reduxjs/toolkit';
import { endpoints } from '../../shared/api/repositories/endpoints';
import valueReducer from '../../features/searchOnInput/model/searchSlice';
import searchReducer from '../../features/profile/GeneralSearchUser/module/GeneralSearchUserSlice';

export const store = configureStore({
    reducer: {
        valueSearch: valueReducer,
        search: searchReducer,
        [endpoints.reducerPath]: endpoints.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(endpoints.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
