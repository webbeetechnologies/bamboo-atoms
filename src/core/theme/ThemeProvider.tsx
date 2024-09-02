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

const RootContext = createContext(true);
export const ThemeContext = createContext<ThemeProviderContext>(defaultContextValue);

const arr: string[] = []

export const ProvideTheme = ({
    theme,
    extractStyles = defaultExtractStyles,
    children,
    overwritableProperties = arr,
}: ProvideThemeArgs) => {
    const contextValue = useContext(ThemeContext);

    const [colorMode, setColorMode] = useState(theme?.colorMode || contextValue.colorMode);

    const registeredStyles = useRegisteryListener({
        isRoot: useContext(RootContext),
        type: 'styles',
    });

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
        const newContextValue = { ...theme, extractStyles } as ITheme & { extractStyles: Required<ProvideThemeArgs>['extractStyles']};

        return {
            ...merge(
                {},
                defaultThemeValue,
                newContextValue,
                ...(registeredStyles || []),
                defaultContextValue === contextValue ? newContextValue : contextValue,
                (overwritableProperties).reduce((acc, key) => {
                    acc[key] = newContextValue[key] ?? contextValue[key]

                    return acc
                }, {} as Partial<ITheme>)
            ),
            '': {},
            colorMode,
            setColorMode: handleSetColorMode,
            toggleColorMode,
        };
    }, [
        theme,
        registeredStyles,
        extractStyles,
        contextValue,
        colorMode,
        handleSetColorMode,
        toggleColorMode,
    ]);

    return (
        <RootContext.Provider value={false}>
            <ThemeContext.Provider value={memoizedValue}>{children}</ThemeContext.Provider>
        </RootContext.Provider>
    );
};

export const extendTheme = (theme: Partial<ITheme>): ITheme => {
    return merge(defaultThemeValue, theme);
};
