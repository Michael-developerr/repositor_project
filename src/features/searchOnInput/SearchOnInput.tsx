import React, { useState } from 'react';
import Input from '../../shared/ui/input/Input';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { valueAction } from './model/searchSlice';
import { setHasSearched } from '../profile/GeneralSearchUser/module/GeneralSearchUserSlice';

const SearchOnInput = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    console.log(
        'Dispatching setHasSearched for value:',
        value,
    );
    const dispatch = useDispatch();
    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
    ) => {
        if (e.key === 'Enter' && value.trim()) {
            dispatch(setHasSearched(true));
            dispatch(valueAction.chengeValue(value));
            navigate(`/user/${value.trim()}`);
        }
    };

    return (
        <Input
            placeholder="Enter GitHub username"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
        />
    );
};

export default SearchOnInput;
