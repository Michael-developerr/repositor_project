import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {
    GitHubRepo,
    GitHubSearchResponse,
    GitHubUser,
} from './typeApi';

export const endpoints = createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com',
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
        searchUsers: builder.query<
            GitHubSearchResponse,
            string
        >({
            query: (searchTerm) =>
                `/search/users?q=${encodeURIComponent(searchTerm)}`,
        }),
    }),
});

export const {
    useGetCurrentUserQuery,
    useGetUserInfoQuery,
    useGetUserReposQuery,
    useSearchUsersQuery,
} = endpoints;
