import style from './GeneralSearchUser.module.css';
import useSearchData from '../api/useSearchData';
import ProfileUser from '../../../entities/user-profile/ProfileUser';
import ProfileRepositoria from '../../../entities/user-repositoria/ProfileRepositoria';

const GeneralSearchUser = () => {
    const { searchUser } = useSearchData();
    const { data, isLoading, error } = searchUser;

    return (
        <ul className={style.list}>
            <li>
                {' '}
                <ProfileUser
                    user={data}
                    isLoading={isLoading}
                    error={error}
                />
            </li>
            <li>
                <ProfileRepositoria user={data} />
            </li>
        </ul>
    );
};

export default GeneralSearchUser;
