import Header from '../../widgets/header/Header';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.css';
const Layout = () => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.wrapper}>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
