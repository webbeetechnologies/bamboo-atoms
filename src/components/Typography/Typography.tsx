import React, { ComponentType, createContext, forwardRef, memo, useContext, useMemo } from 'react';
import { StyleProp, StyleSheet, Text as NativeText } from 'react-native';
import useComponentTheme from '../../hooks/useComponentTheme';
import type { IComponentStyles } from '../../core/theme/types';
import type { ITypographyProps } from './types';

const HasAncestorContext = createContext(false);

export const textFactory = (
    name: keyof IComponentStyles,
    defaultStyle: StyleProp<any>,
    isBlockLevelElement = false,
    DefaultComponent: ComponentType<any> = NativeText,
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
                [hasAncestorText, themeStyles, style],
            );

            return hasAncestorText ? (
                <DefaultComponent ref={ref} style={styles} {...rest} />
            ) : (
                <HasAncestorContext.Provider value={true}>
                    <DefaultComponent ref={ref} style={styles} {...rest} />
                </HasAncestorContext.Provider>
            );
        }),
    );
};
