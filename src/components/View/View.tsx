import React, { forwardRef, memo } from 'react';
import { View as NativeView, StyleSheet } from 'react-native';
import useComponentTheme from '../../hooks/useComponentTheme';
import type { IViewProps } from './types';

const View = (props: IViewProps, ref: any) => {
    const { style, ...rest } = props;
    const themeStyles = useComponentTheme('View');

    return <NativeView ref={ref} style={StyleSheet.flatten([themeStyles, style])} {...rest} />;
};

export default memo(forwardRef(View));
