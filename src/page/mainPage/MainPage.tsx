import { Link } from 'react-router-dom';
import { useGetCurrentUserQuery } from '../../shared/api/repositories/endpoints';
import Text from '../../shared/ui/text/Text';
import Error404 from '../Error404';
import Loading from '../Loading';
import styles from './MainPage.module.css';
const MainPage = () => {
    const { data, isLoading, error } =
        useGetCurrentUserQuery();
    if (isLoading) return <Loading />;
    if (error) return <Error404 />;
    console.log(data);
    return (
        <>
            <ul>
                <li>
                    {data && (
                        <div className={styles.block}>
                            <img
                                src={data.avatar_url}
                                alt="Avatar"
                                className={styles.img}
                            />
                            <Text
                                tag="h3"
                                weight="semiBold"
                                size="l"
                            >
                                {data.login}
                            </Text>
                            <Link to={data.html_url}>
                                ссылка на чела нужно указать
                                то что вводим в input
                            </Link>
                            <div
                                className={
                                    styles.block__follow
                                }
                            >
                                <Text
                                    tag="p"
                                    className=""
                                >
                                    {data.followers}{' '}
                                    followers
                                </Text>
                                <Text tag="p">
                                    {data.following}{' '}
                                    following
                                </Text>
                            </div>
                        </div>
                    )}
                </li>
            </ul>
        </>
    );
};

export default MainPage;
