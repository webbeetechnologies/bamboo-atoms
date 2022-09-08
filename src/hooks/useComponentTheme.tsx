import { useContext, useMemo } from 'react';
import type { StyleProp } from 'react-native';
import { ThemeContext, ComponentStyles } from '../core/theme';
import useColorMode from './useColorMode';

const useComponentTheme = (componentName: keyof ComponentStyles) => {
    const { theme, extractStyles } = useContext(ThemeContext);
    const { componentStyles } = theme;
    const colorMode = useColorMode();
    // @ts-ignore // if componentStyles schema is changed or replaced this will return an empty object
    const { dark = {}, light = {}, ...rest } = componentStyles[componentName] || {};
    const themeStyles: StyleProp<any> = colorMode === 'dark' ? dark : light;

    const styles = useMemo(() => ({ ...rest, ...themeStyles }), [rest, themeStyles]);

    return !extractStyles
        ? styles
        : extractStyles({
              theme,
              componentName,
              colorMode,
              defaultStyles: styles,
          });
};

export default useComponentTheme;
