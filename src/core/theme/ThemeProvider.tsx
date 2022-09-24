import React, { createContext, useContext, useMemo } from 'react';
import merge from 'ts-deepmerge';
import type { ITheme, ThemeProviderContext, ProvideThemeArgs } from './types';
import { componentStyles } from './defaultStyles';
import { defaultExtractTheme } from './extractTheme';

const defaultThemeValue: ITheme = {
    colorMode: 'auto',
    ...componentStyles,
};

const defaultContextValue: ThemeProviderContext = {
    ...defaultThemeValue,
    extractTheme: defaultExtractTheme,
};

export const ThemeContext = createContext<ThemeProviderContext>(defaultContextValue);

export const ProvideTheme = ({
    theme,
    extractTheme = defaultExtractTheme,
    children,
}: ProvideThemeArgs) => {
    const contextValue = useContext(ThemeContext);

    const memoizedValue = useMemo(() => {
        const newContextValue = { ...theme, extractTheme };

        return {
            ...defaultContextValue,
            ...newContextValue,
            ...(defaultContextValue === contextValue ? newContextValue : contextValue),
        };
    }, [theme, extractTheme, contextValue]);

    return <ThemeContext.Provider value={memoizedValue}>{children}</ThemeContext.Provider>;
};

export const extendTheme = (theme: Partial<ITheme>): ITheme => {
    return merge(defaultThemeValue, theme);
};
