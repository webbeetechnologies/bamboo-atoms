import type { StyleProp } from 'react-native';
import type { IExtractThemeFuncArgs } from 'bamboo-shoots';

export const defaultExtractTheme = ({ theme, componentName, colorMode }: IExtractThemeFuncArgs) => {
    const { dark = {}, light = {}, ...rest } = theme[componentName] || {};
    const themeStyles: StyleProp<any> = colorMode === 'dark' ? dark : light;

    return { ...rest, ...themeStyles };
};
