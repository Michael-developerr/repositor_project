import { Link } from 'react-router-dom';
import useProfileData from '../../features/profile/api/useProfileData';
import Loading from '../../page/Loading';
import Text from '../../shared/ui/text/Text';
import styles from './ProfileRepositoria.module.css';
import usePaginatedRepos from '../../features/profile/api/usePaginatedRepos';

const ProfileRepositoria = () => {
    const { user } = useProfileData();
    const {
        reposData,
        isLoading,
        error,
        page,
        nextPage,
        prevPage,
        goToPage,
        hasNextPage,
        hasPrevPage,
        visiblePages,
    } = usePaginatedRepos(user.userData?.login || '');

    return (
        <div className={styles.reposSection}>
            <Text
                tag="h2"
                weight="bold"
                size="XL"
            >
                Репозитории {reposData?.length}
            </Text>

            {isLoading ? (
                <Loading />
            ) : error ? (
                <Text tag="p">
                    Ошибка загрузки репозиториев
                </Text>
            ) : (
                <>
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
                                    className={
                                        styles.repoLink
                                    }
                                >
                                    <Text
                                        className={
                                            styles.text
                                        }
                                        tag="h3"
                                        weight="semiBold"
                                        size="l"
                                    >
                                        {repo.name}
                                    </Text>
                                </Link>
                                <Text tag="p">
                                    {repo.description}
                                </Text>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.pagination}>
                        <button
                            onClick={prevPage}
                            disabled={!hasPrevPage}
                            className={
                                styles.paginationButton
                            }
                        >
                            &lt;
                        </button>

                        {visiblePages.map(
                            (pageNum, index) =>
                                pageNum === '...' ? (
                                    <span
                                        key={`dots-${index}`}
                                        className={
                                            styles.dots
                                        }
                                    >
                                        ...
                                    </span>
                                ) : (
                                    <button
                                        key={pageNum}
                                        onClick={() =>
                                            goToPage(
                                                Number(
                                                    pageNum,
                                                ),
                                            )
                                        }
                                        className={`${styles.pageButton} ${page === pageNum ? styles.active : ''}`}
                                    >
                                        {pageNum}
                                    </button>
                                ),
                        )}

                        <button
                            onClick={nextPage}
                            disabled={!hasNextPage}
                            className={
                                styles.paginationButton
                            }
                        >
                            &gt;
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProfileRepositoria;
