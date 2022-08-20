import { useContext } from 'react';
import { ThemeContext } from '../core';

const useColorMode = () => {
    const { theme } = useContext(ThemeContext);

    return theme.config.colorMode;
};

export default useColorMode;
