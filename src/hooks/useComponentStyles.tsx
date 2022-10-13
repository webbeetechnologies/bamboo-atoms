import { useContext, useMemo } from 'react';
import { StyleProp, StyleSheet } from 'react-native';
import { ThemeContext, IComponentStyles } from '../core/theme';
import useColorMode from './useColorMode';

const defaultStyleObject = {};

const useComponentStyles = (
    componentName: keyof IComponentStyles | string,
    style: StyleProp<any> | StyleProp<any>[] = defaultStyleObject,
) => {
    const { extractStyles, ...theme } = useContext(ThemeContext);
    const colorMode = useColorMode();

    return useMemo(
        () => extractStyles({ theme, componentName, colorMode, style: StyleSheet.flatten(style) }),
        [extractStyles, theme, componentName, colorMode, style],
    );
};

export default useComponentStyles;
