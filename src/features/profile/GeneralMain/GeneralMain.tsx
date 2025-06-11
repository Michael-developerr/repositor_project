import ProfileUser from '../../../entities/user-profile/ProfileUser';
import ProfileRepositoria from '../../../entities/user-repositoria/ProfileRepositoria';
import useProfileData from '../api/useProfileData';
import style from './GeneralMain.module.css';
import searchUserlogo from '../../../shared/icons/main/searchUser.svg';
const GeneralMain = () => {
    const { user } = useProfileData();
    const { userData, isUserLoading, userError } = user;

    if (!userData) {
        return (
            <div className={style.nowSearch}>
                <img
                    src={searchUserlogo}
                    alt="Search user"
                />
                <p>Start with searching a GitHub user</p>
            </div>
        );
    }
    return (
        <ul className={style.listGeneral}>
            <li>
                <ProfileUser
                    user={userData}
                    isLoading={isUserLoading}
                    error={userError}
                />
            </li>
            <li>
                <ProfileRepositoria user={userData} />
            </li>
        </ul>
    );
};

export default GeneralMain;
