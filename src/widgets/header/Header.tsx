import style from './header.module.css';
import Logo from '../../shared/icons//header/logo.svg';
import SearchOnInput from '../../features/searchOnInput/SearchOnInput';

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.header__block}>
                <img
                    src={Logo}
                    width="40"
                    height="40"
                    alt="логитип"
                />
                <SearchOnInput />
            </div>
        </div>
    );
};

export default Header;
