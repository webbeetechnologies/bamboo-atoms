import { useContext } from 'react';
import { Appearance, StyleProp } from 'react-native';
import { ComponentStyles, ThemeContext } from '../core';
import type { WithInteractionProps } from '../core/ThemeProvider';

const normalizeComponentStyles = (styles: StyleProp<any> & WithInteractionProps<any>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _interactions, ...rest } = styles;

    return { ...rest };
};

const useComponentTheme = (componentName: keyof ComponentStyles) => {
    const defaultMode = Appearance.getColorScheme();
    const { theme } = useContext(ThemeContext);
    const { config, componentStyles } = theme;
    const { colorMode } = config;

    if (colorMode === 'auto') {
        if (!defaultMode) {
            return normalizeComponentStyles(componentStyles[componentName].light);
        }
        return normalizeComponentStyles(componentStyles[componentName][defaultMode]);
    } else {
        return normalizeComponentStyles(componentStyles[componentName][colorMode]);
    }
};

export default useComponentTheme;
