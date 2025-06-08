import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from './provider/router-provider';
import { store } from './provider/redux-provider';

const App = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={Router()} />
        </Provider>
    );
};

export default App;
