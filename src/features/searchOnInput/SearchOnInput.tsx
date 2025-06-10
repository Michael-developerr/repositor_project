import React, { useState } from 'react';
import Input from '../../shared/ui/input/Input';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { valueAction } from './model/searchSlice';

const SearchOnInput = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
    ) => {
        if (e.key === 'Enter' && value.trim()) {
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
