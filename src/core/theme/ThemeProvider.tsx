import React, { createContext, ReactNode, useMemo } from 'react';
import merge from 'ts-deepmerge';
import type { Theme, ThemeProviderContext, PartialTheme } from './types';
import { componentStyles } from './defaultStyles';

const defaultThemeValue: Theme = {
    config: {
        colorMode: 'auto',
    },
    componentStyles: componentStyles,
};

const defaultContextValue: ThemeProviderContext = {
    theme: defaultThemeValue,
};

export const ThemeContext = createContext<ThemeProviderContext>(defaultContextValue);

export const ProvideTheme = ({
    value,
    children,
}: {
    value: ThemeProviderContext;
    children: ReactNode;
}) => {
    const memoizedValue = useMemo(() => value, [value]);

    return <ThemeContext.Provider value={memoizedValue}>{children}</ThemeContext.Provider>;
};

export const extendTheme = (theme: Partial<PartialTheme>): Theme => {
    return merge(defaultThemeValue, theme);
};
