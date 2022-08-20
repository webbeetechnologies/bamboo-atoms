import { useContext } from 'react';
import { ComponentStyles, ThemeContext } from '../core';

// type is optional since the component won't always be in an interaction state
const useInteractionStyles = (name: keyof ComponentStyles, type?: string) => {
    const { theme } = useContext(ThemeContext);
    const { config, componentStyles } = theme;
    const colorMode = config.colorMode === 'auto' ? 'light' : config.colorMode;

    if (!type) return {};

    if (componentStyles[name] && componentStyles[name][colorMode]) {
        if (!componentStyles[name][colorMode]._interactions?.[type]) return {};

        return componentStyles[name][colorMode]._interactions?.[type];
    }

    return {};
};

export default useInteractionStyles;
