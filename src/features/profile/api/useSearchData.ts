import { useParams } from 'react-router-dom';
import { useSearchUsersQuery } from '../../../shared/api/repositories/endpoints';

const useSearchData = () => {
    const { username } = useParams();

    const { data, isLoading, error } = useSearchUsersQuery(
        username || '',
    );

    const foundUser = data?.items.find(
        (user) =>
            user.login.toLowerCase() ===
            username?.toLowerCase().trim(),
    );

    return {
        searchUser: {
            data: foundUser,
            isLoading,
            error,
        },
    };
};

export default useSearchData;
