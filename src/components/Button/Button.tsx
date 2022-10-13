import React, { forwardRef, memo } from 'react';
import { Pressable } from 'react-native';
import useComponentStyles from '../../hooks/useComponentStyles';
import type { IButtonProps } from './types';

export const Button = (props: IButtonProps, ref: any) => {
    const { style, ...rest } = props;
    const styles = useComponentStyles('Button', style);

    return <Pressable ref={ref} style={styles} {...rest} />;
};

export default memo(forwardRef(Button));
