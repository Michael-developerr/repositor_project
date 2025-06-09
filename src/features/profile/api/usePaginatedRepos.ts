import { useState } from 'react';
import { useGetUserReposQuery } from '../../../shared/api/repositories/endpoints';

const usePaginatedRepos = (username: string) => {
    const [page, setPage] = useState(1); // Начинаем с 1, так как GitHub API использует 1-based pagination
    const perPage = 4; // Объявляем до использования

    const totalPages = 10;
    const {
        data: reposData,
        isLoading,
        error,
    } = useGetUserReposQuery({
        username,
        page,
        per_page: perPage, // Используем объявленную переменную
    });

    const getVisiblePages = () => {
        const visiblePages = [];
        visiblePages.push(1);
        // Показываем текущую страницу и соседние
        for (
            let i = Math.max(2, page - 1);
            i <= Math.min(totalPages - 1, page + 1);
            i++
        ) {
            if (!visiblePages.includes(i)) {
                visiblePages.push(i);
            }
        }

        // Всегда показываем последнюю страницу
        if (!visiblePages.includes(totalPages)) {
            visiblePages.push(totalPages);
        }

        // Добавляем разрывы (точки) где нужно
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
