import ProfileUjser from '../../entities/user-profile/ProfileUjser';
import ProfileRepositoria from '../../entities/user-repositoria/ProfileRepositoria';
import style from './MainPage.module.css';

const MainPage = () => {
    return (
        <ul className={style.list}>
            <li>
                <ProfileUjser />
            </li>
            <li>
                <ProfileRepositoria />
            </li>
        </ul>
    );
};

export default MainPage;
