import { useContext } from 'react';
import { Theme, ThemeContext } from '../core/theme';

// letting the user define the type of the custom theme with generic
const useTheme = <T extends Theme>() => {
    const { theme } = useContext(ThemeContext);
    return theme as T;
};

export default useTheme;
