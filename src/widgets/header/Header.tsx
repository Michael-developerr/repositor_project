import Input from '../../shared/ui/input/Input';
import style from './header.module.css';
import Logo from '../../shared/icons//header/logo.svg';

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
                <Input placeholder="Enter GitHub username" />
            </div>
        </div>
    );
};

export default Header;
