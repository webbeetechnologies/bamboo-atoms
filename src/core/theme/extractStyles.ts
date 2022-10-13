import type { StyleProp } from 'react-native';
import type { IExtractStylesFuncArgs } from 'bamboo-shoots';

export const defaultExtractStyles = ({
    theme,
    componentName,
    colorMode,
    style,
}: IExtractStylesFuncArgs) => {
    const { dark = {}, light = {}, ...rest } = theme[componentName] || {};
    const themeStyles: StyleProp<any> = colorMode === 'dark' ? dark : light;

    return { ...rest, ...themeStyles, ...style };
};
