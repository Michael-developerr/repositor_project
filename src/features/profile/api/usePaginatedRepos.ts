import { useState } from 'react';
import {
    useGetUserInfoQuery,
    useGetUserReposQuery,
} from '../../../shared/api/repositories/endpoints';

const usePaginatedRepos = (username: string) => {
    const [page, setPage] = useState(1);
    const perPage = 4;
    const { data: userInfo } =
        useGetUserInfoQuery(username);

    const {
        data: reposData,
        isLoading,
        error,
    } = useGetUserReposQuery({
        username,
        page,
        per_page: perPage,
    });

    const totalRepos = userInfo?.public_repos || 0;
    const totalPages = Math.ceil(totalRepos / perPage);

    const getVisiblePages = () => {
        const visiblePages = [];
        visiblePages.push(1);

        for (
            let i = Math.max(2, page - 1);
            i <= Math.min(totalPages - 1, page + 1);
            i++
        ) {
            if (!visiblePages.includes(i)) {
                visiblePages.push(i);
            }
        }

        if (!visiblePages.includes(totalPages)) {
            visiblePages.push(totalPages);
        }

        const pagesWithBreaks = [];
        for (let i = 0; i < visiblePages.length; i++) {
            pagesWithBreaks.push(visiblePages[i]);
            if (visiblePages[i + 1] - visiblePages[i] > 1) {
                pagesWithBreaks.push('...');
            }
        }

        return pagesWithBreaks;
    };

    const nextPage = () =>
        setPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () =>
        setPage((prev) => Math.max(prev - 1, 1));
    const goToPage = (pageNum: number) => setPage(pageNum);

    return {
        reposData,
        totalRepos,
        isLoading,
        error,
        page,
        nextPage,
        prevPage,
        goToPage,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
        visiblePages: getVisiblePages(),
        totalPages,
    };
};

export default usePaginatedRepos;
