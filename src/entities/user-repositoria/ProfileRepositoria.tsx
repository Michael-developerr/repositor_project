import { Link } from 'react-router-dom';
import Text from '../../shared/ui/text/Text';
import styles from './ProfileRepositoria.module.css';
import usePaginatedRepos from '../../features/profile/api/usePaginatedRepos';
import { GitHubUser } from '../../shared/api/repositories/typeApi';
import notFound from '../../shared/icons/main/notFound.svg';
import notRepo from '../../shared/icons/main/notRepo.svg';
import Loading from '../../page/loading/Loading';
interface ProfileRepositoriaProps {
    user?: GitHubUser;
}

const ProfileRepositoria = ({
    user,
}: ProfileRepositoriaProps) => {
    const {
        totalRepos,
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
    } = usePaginatedRepos(user?.login || '');

    if (isLoading) return <Loading />;

    if (error)
        return (
            <div className={styles.error}>
                <img
                    src={notFound}
                    alt="User not found"
                />
                <p>User not found</p>
            </div>
        );

    return (
        <div>
            <Text
                tag="h2"
                weight="bold"
                size="XL"
                className={styles.title}
            >
                Repositories ({totalRepos})
            </Text>

            {reposData && reposData.length > 0 ? (
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
                                            styles.reposList__text
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
                            {'<'}
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
                            {'>'}
                        </button>
                    </div>
                </>
            ) : (
                <div className={styles.notRepo}>
                    <img
                        src={notRepo}
                        alt="Нет репозиториев"
                    />

                    <Text
                        tag="p"
                        size="s"
                    >
                        Repository list is empty
                    </Text>
                </div>
            )}
        </div>
    );
};

export default ProfileRepositoria;
