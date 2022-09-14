import { Appearance } from 'react-native';
import useTheme from './useTheme';

const useColorMode = () => {
    const defaultMode = Appearance.getColorScheme() || 'light';
    const { colorMode } = useTheme();

    return colorMode === 'auto' ? defaultMode : colorMode;
};

export default useColorMode;
