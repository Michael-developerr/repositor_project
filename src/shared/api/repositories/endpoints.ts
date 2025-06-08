import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { GitHubUser } from './typeApi';

export const endpoints = createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com',
        prepareHeaders: (headers) => {
            const token = import.meta.env.VITE_GITHUB_TOKEN;
            if (token) {
                headers.set(
                    'Authorization',
                    `Bearer ${token}`,
                );
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getCurrentUser: builder.query<GitHubUser, void>({
            query: () => '/user',
        }),
    }),
});

export const { useGetCurrentUserQuery } = endpoints;
