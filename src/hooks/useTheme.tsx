import { useContext } from 'react';
import { ITheme, ThemeContext } from '../core/theme';

// letting the user define the type of the custom theme with generic
const useTheme = <T extends ITheme>() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { extractStyles, ...theme } = useContext(ThemeContext);
    return theme as T;
};

export default useTheme;
