import React, { forwardRef, memo } from 'react';
import { StyleProp, StyleSheet, Text as NativeText } from 'react-native';
import useComponentTheme from '../../hooks/useComponentTheme';
import type { IComponentStyles } from '../../core/theme/types';
import type { ITypographyProps } from './types';

export const textFactory = (name: keyof IComponentStyles, defaultStyle: StyleProp<any>) =>
    memo(
        forwardRef((props: ITypographyProps, ref: any) => {
            const { style, ...rest } = props;
            const themeStyles = useComponentTheme(name);

            return (
                <NativeText
                    ref={ref}
                    style={StyleSheet.flatten([defaultStyle, themeStyles, style])}
                    {...rest}
                />
            );
        }),
    );
