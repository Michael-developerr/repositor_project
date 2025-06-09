import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { GitHubRepo, GitHubUser } from './typeApi';

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
        getUserRepos: builder.query<GitHubRepo[], string>({
            query: (username) => `/users/${username}/repos`,
        }),
    }),
});

export const {
    useGetCurrentUserQuery,
    useGetUserReposQuery,
} = endpoints;
