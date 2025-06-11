import style from './GeneralSearchUser.module.css';
import useSearchData from '../api/useSearchData';
import ProfileUser from '../../../entities/user-profile/ProfileUser';
import ProfileRepositoria from '../../../entities/user-repositoria/ProfileRepositoria';
// import searchUserlogo from '../../../shared/icons/main/searchUser.svg';
// import { useSelector } from 'react-redux';
// import { hasSearchedSel } from './module/GeneralSearchUserSelector';

const GeneralSearchUser = () => {
    const { searchUser } = useSearchData();
    const { data, isLoading, error } = searchUser;

    // const hasSearched = useSelector(hasSearchedSel);

    // if (!hasSearched) {
    //     return (
    //         <div className={style.nowSearch}>
    //             <img
    //                 src={searchUserlogo}
    //                 alt="Search user"
    //             />
    //             <p>Start with searching a GitHub user</p>
    //         </div>
    //     );
    // }

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
