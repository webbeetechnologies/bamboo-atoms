import { useContext, useMemo } from 'react';
import { ThemeContext, IComponentStyles } from '../core/theme';
import useColorMode from './useColorMode';

const useComponentTheme = (componentName: keyof IComponentStyles | string) => {
    const { extractTheme, ...theme } = useContext(ThemeContext);
    const colorMode = useColorMode();

    return useMemo(
        () => extractTheme({ theme, componentName, colorMode }),
        [extractTheme, theme, componentName, colorMode],
    );
};

export default useComponentTheme;
