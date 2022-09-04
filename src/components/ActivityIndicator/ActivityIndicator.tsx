import React, { forwardRef, memo } from 'react';
import { ActivityIndicator as NativeActivityIndicator, StyleSheet } from 'react-native';
import useComponentTheme from '../../hooks/useComponentTheme';
import type { IActivityIndicatorProps } from './types';

export const ActivityIndicator = (props: IActivityIndicatorProps, ref: any) => {
    const { style, ...rest } = props;
    const themeStyles = useComponentTheme('ActivityIndicator');

    return (
        <NativeActivityIndicator
            ref={ref}
            style={StyleSheet.flatten([themeStyles, style])}
            {...rest}
        />
    );
};

export default memo(forwardRef(ActivityIndicator));
