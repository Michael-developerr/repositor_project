import {
    useGetCurrentUserQuery,
    useGetUserReposQuery,
} from '../../../shared/api/repositories/endpoints';

const useProfileData = () => {
    const {
        data: userData,
        isLoading: isUserLoading,
        error: userError,
    } = useGetCurrentUserQuery();

    const {
        data: reposData,
        isLoading: isReposLoading,
        error: reposError,
    } = useGetUserReposQuery({
        username: userData?.login || '',
        page: 1,
        per_page: 4,
    });

    return {
        user: {
            userData,
            isUserLoading,
            userError,
        },
        repos: {
            reposData,
            isReposLoading,
            reposError,
        },
    };
};

export default useProfileData;
