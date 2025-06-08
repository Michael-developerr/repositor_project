import React, { FC } from 'react';

import {
    SizesValues,
    SizeKeys,
    WeighKeys,
    WeighsValues,
} from './textType';

interface PropsText {
    tag:
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'p'
        | 'span';
    weight?: WeighKeys;
    size?: SizeKeys;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
const Text: FC<PropsText> = (props) => {
    const {
        tag: Tag = 'p',
        weight = 'normal',
        size = 'xs',
        children,
        className = '',
        style = {},
        ...restProps
    } = props;

    const styles = {
        fontWeight: WeighsValues[weight],
        fontSize: SizesValues[size],
        ...style,
    };

    return (
        <Tag
            className={className}
            style={styles}
            {...restProps}
        >
            {children}
        </Tag>
    );
};

export default Text;
