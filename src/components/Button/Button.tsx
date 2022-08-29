import React, { forwardRef, memo } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { useComponentTheme } from '../../hooks';
import type { IButtonProps } from './types';

export const Button = (props: IButtonProps, ref: any) => {
    const { style, ...rest } = props;
    const themeStyles = useComponentTheme('Button');

    return <Pressable ref={ref} style={StyleSheet.flatten([themeStyles, style])} {...rest} />;
};

export default memo(forwardRef(Button));
