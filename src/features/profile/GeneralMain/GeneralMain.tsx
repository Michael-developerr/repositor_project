import ProfileUser from '../../../entities/user-profile/ProfileUser';
import ProfileRepositoria from '../../../entities/user-repositoria/ProfileRepositoria';
import useProfileData from '../api/useProfileData';
import style from './GeneralMain.module.css';

const GeneralMain = () => {
    const { user } = useProfileData();
    const { userData, isUserLoading, userError } = user;

    return (
        <ul className={style.list}>
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
