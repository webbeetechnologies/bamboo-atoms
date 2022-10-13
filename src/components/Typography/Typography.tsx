import React, { ComponentType, createContext, forwardRef, memo, useContext, useMemo } from 'react';
import { StyleProp, StyleSheet, Text as NativeText } from 'react-native';
import useComponentStyles from '../../hooks/useComponentStyles';
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
            const componentStyles = useComponentStyles(name);
            const styleProp = useComponentStyles('', style); // we can't include it in componentStyles because of the conditional statement
            const hasAncestorText = useContext(HasAncestorContext);

            const styles = useMemo(
                () =>
                    StyleSheet.flatten([
                        defaultStyle,
                        hasAncestorText && !isBlockLevelElement ? {} : componentStyles,
                        styleProp,
                    ]),
                [hasAncestorText, componentStyles, styleProp],
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
