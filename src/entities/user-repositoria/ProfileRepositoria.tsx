import { Link } from 'react-router-dom';
import useProfileData from '../../features/profile/api/useProfileData';
import Loading from '../../page/Loading';
import Text from '../../shared/ui/text/Text';
import styles from './ProfileRepositoria.module.css';

const ProfileRepositoria = () => {
    const { repos } = useProfileData();
    const { reposData, isReposLoading, reposError } = repos;

    return (
        <div className={styles.reposSection}>
            <Text
                tag="h2"
                weight="bold"
                size="XL"
            >
                Репозитории({reposData?.length})
            </Text>

            {isReposLoading ? (
                <Loading />
            ) : reposError ? (
                <Text tag="p">
                    Ошибка загрузки репозиториев
                </Text>
            ) : (
                <ul className={styles.reposList}>
                    {reposData?.map((repo) => (
                        <li
                            key={repo.id}
                            className={styles.repoItem}
                        >
                            <Link
                                to={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.repoLink}
                            >
                                <Text
                                    className={styles.text}
                                    tag="h3"
                                    weight="semiBold"
                                    size="l"
                                >
                                    {repo.name}
                                </Text>
                            </Link>
                            <Text tag="p">
                                {' '}
                                {repo.description}
                            </Text>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProfileRepositoria;
