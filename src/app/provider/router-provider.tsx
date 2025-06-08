import { createBrowserRouter } from 'react-router-dom';

import { lazy, Suspense } from 'react';
import { PATH } from '../../shared/config/path';
import Loading from '../../page/Loading';
import Error404 from '../../page/Error404';
import MainPage from '../../page/mainPage/MainPage';

const Layout = lazy(() => import('../layout/Layout'));

const Router = () => {
    return createBrowserRouter([
        {
            path: PATH.home,
            element: (
                <Suspense fallback={<Loading />}>
                    <Layout />
                </Suspense>
            ),
            errorElement: <Error404 />,
            children: [
                {
                    path: PATH.home,
                    element: <MainPage />,
                },
            ],
        },
    ]);
};

export default Router;
