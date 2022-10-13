import React, { createContext, useContext, useMemo } from 'react';
import merge from 'ts-deepmerge';
import type { ITheme, ThemeProviderContext, ProvideThemeArgs } from './types';
import { componentStyles } from './defaultStyles';
import { defaultExtractStyles } from './extractStyles';

const defaultThemeValue: ITheme = {
    colorMode: 'auto',
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

    const memoizedValue = useMemo(() => {
        const newContextValue = { ...theme, extractStyles };

        return {
            ...defaultContextValue,
            ...newContextValue,
            ...(defaultContextValue === contextValue ? newContextValue : contextValue),
        };
    }, [theme, extractStyles, contextValue]);

    return <ThemeContext.Provider value={memoizedValue}>{children}</ThemeContext.Provider>;
};

export const extendTheme = (theme: Partial<ITheme>): ITheme => {
    return merge(defaultThemeValue, theme);
};
