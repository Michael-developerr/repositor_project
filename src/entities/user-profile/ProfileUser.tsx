import Error404 from '../../page/Error404';
import Loading from '../../page/loading/Loading';

import Text from '../../shared/ui/text/Text';
import { Link } from 'react-router-dom';
import styles from './ProfileUjser.module.css';
import { GitHubUser } from '../../shared/api/repositories/typeApi';

interface ProfileUserProps {
    user?: GitHubUser;
    isLoading: boolean;
    error: unknown;
}

const ProfileUser = ({
    user,
    isLoading,
    error,
}: ProfileUserProps) => {
    if (isLoading) return <Loading />;
    if (error) return <Error404 />;
    if (!user) return null;

    return (
        <>
            {user && (
                <div className={styles.userBlock}>
                    <img
                        src={user.avatar_url}
                        alt="Avatar"
                        className={styles.img}
                    />
                    <Text
                        tag="h3"
                        weight="semiBold"
                        size="l"
                    >
                        {user.login}
                    </Text>
                    <Link
                        to={user.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {user.login}
                    </Link>
                    <div className={styles.block__follow}>
                        <Text
                            tag="p"
                            className={
                                styles.block__follow__followers
                            }
                        >
                            {user.followers} followers
                        </Text>
                        <Text
                            tag="p"
                            className={
                                styles.block__follow__following
                            }
                        >
                            {user.following} following
                        </Text>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProfileUser;
