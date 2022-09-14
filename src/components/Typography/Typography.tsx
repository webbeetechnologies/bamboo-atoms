import React, { createContext, forwardRef, memo, useContext, useMemo } from 'react';
import { StyleProp, StyleSheet, Text as NativeText } from 'react-native';
import useComponentTheme from '../../hooks/useComponentTheme';
import type { IComponentStyles } from '../../core/theme/types';
import type { ITypographyProps } from './types';

const HasAncestorContext = createContext(false);

export const textFactory = (
    name: keyof IComponentStyles,
    defaultStyle: StyleProp<any>,
    isBlockLevelElement = false,
) => {
    return memo(
        forwardRef((props: ITypographyProps, ref: any) => {
            const { style, ...rest } = props;
            const themeStyles = useComponentTheme(name);
            const hasAncestorText = useContext(HasAncestorContext);
            const styles = useMemo(
                () =>
                    StyleSheet.flatten([
                        defaultStyle,
                        hasAncestorText && !isBlockLevelElement ? {} : themeStyles,
                        style,
                    ]),
                [themeStyles, hasAncestorText, style],
            );

            return hasAncestorText ? (
                <NativeText ref={ref} style={styles} {...rest} />
            ) : (
                <HasAncestorContext.Provider value={true}>
                    <NativeText ref={ref} style={styles} {...rest} />
                </HasAncestorContext.Provider>
            );
        }),
    );
};
