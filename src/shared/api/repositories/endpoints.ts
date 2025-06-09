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
        getUserInfo: builder.query<
            { public_repos: number },
            string
        >({
            query: (username) => `/users/${username}`,
        }),
        getUserRepos: builder.query<
            GitHubRepo[],
            {
                username: string;
                page: number;
                per_page: number;
            }
        >({
            query: ({ username, page, per_page }) =>
                `/users/${username}/repos?page=${page}&per_page=${per_page}`,
        }),
    }),
});

export const {
    useGetCurrentUserQuery,
    useGetUserInfoQuery,
    useGetUserReposQuery,
} = endpoints;
