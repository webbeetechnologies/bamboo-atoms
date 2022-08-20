import React, { forwardRef, memo } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { useComponentTheme, useInteractionStyles } from '../../hooks';
import type { IButtonProps } from './types';

export const Button = (props: IButtonProps, ref: any) => {
    const { style, ...rest } = props;
    const themeStyles = useComponentTheme('Button');
    const interactionStyles = useInteractionStyles('Button', '_active');

    return (
        <Pressable
            ref={ref}
            style={StyleSheet.flatten([themeStyles, interactionStyles, style])}
            {...rest}
        />
    );
};

export default memo(forwardRef(Button));
