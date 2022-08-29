import { Appearance } from 'react-native';
import { useTheme } from '../hooks';

const useColorMode = () => {
    const defaultMode = Appearance.getColorScheme() || 'light';
    const { config } = useTheme();

    return config.colorMode === 'auto' ? defaultMode : config.colorMode;
};

export default useColorMode;
