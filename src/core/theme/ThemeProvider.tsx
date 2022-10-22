import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import merge from 'ts-deepmerge';

import { resolveColorMode } from '../../utils';
import type { ITheme, ThemeProviderContext, ProvideThemeArgs, ColorMode } from './types';
import { componentStyles } from './defaultStyles';
import { defaultExtractStyles } from './extractStyles';

const defaultThemeValue: ITheme = {
    colorMode: 'auto',
    setColorMode: () => {},
    toggleColorMode: () => {},
    ...componentStyles,
};

const defaultContextValue: ThemeProviderContext = {
    ...defaultThemeValue,
    extractStyles: defaultExtractStyles,
};

export const ThemeContext = createContext<ThemeProviderContext>(defaultContextValue);

export const ProvideTheme = ({
    theme,
    extractStyles = defaultExtractStyles,
    children,
}: ProvideThemeArgs) => {
    const contextValue = useContext(ThemeContext);

    const [colorMode, setColorMode] = useState(theme?.colorMode || contextValue.colorMode);

    const handleSetColorMode = useCallback((mode: ColorMode) => {
        setColorMode(mode || 'auto');
    }, []);
    const toggleColorMode = useCallback(() => {
        setColorMode(resolveColorMode(colorMode) === 'dark' ? 'light' : 'dark');
    }, [colorMode]);

    useEffect(() => {
        if (theme?.colorMode) setColorMode(theme?.colorMode);
    }, [theme?.colorMode]);

    const memoizedValue = useMemo(() => {
        const newContextValue = { ...theme, extractStyles };

        return {
            ...defaultContextValue,
            ...newContextValue,
            ...(defaultContextValue === contextValue ? newContextValue : contextValue),
            '': {},
            colorMode,
            setColorMode: handleSetColorMode,
            toggleColorMode,
        };
    }, [theme, extractStyles, contextValue, colorMode, handleSetColorMode, toggleColorMode]);

    return <ThemeContext.Provider value={memoizedValue}>{children}</ThemeContext.Provider>;
};

export const extendTheme = (theme: Partial<ITheme>): ITheme => {
    return merge(defaultThemeValue, theme);
};
