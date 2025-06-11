import { useDispatch } from 'react-redux';
import GeneralSearchUser from '../../features/profile/GeneralSearchUser/GeneralSearchUser';
import { useEffect } from 'react';
import { setHasSearched } from '../../features/profile/GeneralSearchUser/module/GeneralSearchUserSlice';

const SearchPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(setHasSearched(false));
        };
    }, [dispatch]);

    return <GeneralSearchUser />;
};

export default SearchPage;
