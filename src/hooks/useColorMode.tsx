import { useMemo } from 'react';
import { resolveColorMode } from '../utils';
import useTheme from './useTheme';

const useColorMode = () => {
    const { colorMode, setColorMode, toggleColorMode } = useTheme();

    return useMemo(
        () => ({ colorMode: resolveColorMode(colorMode), setColorMode, toggleColorMode }),
        [colorMode, setColorMode, toggleColorMode],
    );
};

export default useColorMode;
