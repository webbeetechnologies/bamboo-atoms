import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import merge from 'ts-deepmerge';

import { resolveColorMode } from '../../utils';
import type { ITheme, ThemeProviderContext, ProvideThemeArgs, ColorMode } from './types';
import { componentStyles } from './defaultStyles';
import { defaultExtractStyles } from './extractStyles';
import { useRegisteryListener } from '../componentRepository';

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

const ParentContext = createContext(false);
export const ThemeContext = createContext<ThemeProviderContext>(defaultContextValue);

export const ProvideTheme = ({
    theme,
    extractStyles = defaultExtractStyles,
    children,
}: ProvideThemeArgs) => {
    const contextValue = useContext(ThemeContext);

    const [colorMode, setColorMode] = useState(theme?.colorMode || contextValue.colorMode);

    const registeredStyles = useRegisteryListener({
        hasParentContext: useContext(ParentContext),
        type: 'styles'
    })

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
            ...merge(
                defaultThemeValue,
                registeredStyles,
                newContextValue,
                defaultContextValue === contextValue ? newContextValue : contextValue,
            ),
            '': {},
            colorMode,
            setColorMode: handleSetColorMode,
            toggleColorMode,
        };
    }, [theme, registeredStyles, extractStyles, contextValue, colorMode, handleSetColorMode, toggleColorMode]);

    return (
        <ParentContext.Provider value={true}>
            <ThemeContext.Provider value={memoizedValue}>{children}</ThemeContext.Provider>
        </ParentContext.Provider>
    );
};

export const extendTheme = (theme: Partial<ITheme>): ITheme => {
    return merge(defaultThemeValue, theme);
};
