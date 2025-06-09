import React, { useState } from 'react';
import Input from '../../shared/ui/input/Input';
import { useNavigate } from 'react-router-dom';

const SearchOnInput = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
    ) => {
        if (e.key === 'Enter' && value.trim()) {
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
