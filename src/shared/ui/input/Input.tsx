import { FC } from 'react';
import { InputProps } from './inputType';
import styles from './inputType.module.css';

const Input: FC<InputProps> = (props) => {
    const {
        type = 'text',
        placeholder,
        onChange,
        className = '',
        customProp,
        ...rest //пропсы которые не попали cюда
    } = props;
    return (
        <label
            data-custom={customProp}
            className={`${styles.wrapper}`}
        >
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className={`${styles.input} ${className}`}
                {...rest}
            />
        </label>
    );
};

export default Input;
