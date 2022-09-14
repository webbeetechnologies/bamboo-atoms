import { useContext } from 'react';
import { ThemeContext, IComponentStyles } from '../core/theme';
import useColorMode from './useColorMode';

const useComponentTheme = (componentName: keyof IComponentStyles | string) => {
    const { extractStyles, ...theme } = useContext(ThemeContext);
    const colorMode = useColorMode();

    return extractStyles({ theme, componentName, colorMode });
};

export default useComponentTheme;
