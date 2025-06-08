import { configureStore } from '@reduxjs/toolkit';
import { endpoints } from '../../shared/api/repositories/endpoints';

export const store = configureStore({
    reducer: {
        [endpoints.reducerPath]: endpoints.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(endpoints.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
