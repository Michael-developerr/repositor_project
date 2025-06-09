import Error404 from '../../page/Error404';
import Loading from '../../page/Loading';
import useProfileData from '../../features/profile/api/useProfileData';
import Text from '../../shared/ui/text/Text';
import { Link } from 'react-router-dom';
import styles from './ProfileUjser.module.css';

const ProfileUjser = () => {
    const { user } = useProfileData();
    const { userData, isUserLoading, userError } = user;

    if (isUserLoading) return <Loading />;
    if (userError) return <Error404 />;

    return (
        <>
            {userData && (
                <div className={styles.userBlock}>
                    <img
                        src={userData.avatar_url}
                        alt="Avatar"
                        className={styles.img}
                    />
                    <Text
                        tag="h3"
                        weight="semiBold"
                        size="l"
                    >
                        {userData.login}
                    </Text>
                    <Link
                        to={userData.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Профиль на GitHub
                    </Link>
                    <div className={styles.block__follow}>
                        <Text
                            tag="p"
                            className={
                                styles.block__follow__followers
                            }
                        >
                            {userData.followers} followers
                        </Text>
                        <Text
                            tag="p"
                            className={
                                styles.block__follow__following
                            }
                        >
                            {userData.following} following
                        </Text>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProfileUjser;
