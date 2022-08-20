import React, { createContext, ReactNode } from 'react';
import type { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import merge from 'lodash.merge';

export interface WithInteractionProps<T> {
    _interactions?: {
        _active?: StyleProp<T>;
        _hover?: StyleProp<T>;
        _focus?: StyleProp<T>;
        [key: string]: StyleProp<T>;
    };
}

export interface StyleWithTheme<T> {
    dark: StyleProp<T> & WithInteractionProps<T>;
    light: StyleProp<T> & WithInteractionProps<T>;
}

export interface ComponentStyles {
    ActivityIndicator: StyleWithTheme<ViewStyle>;
    Button: StyleWithTheme<ViewStyle>;
    Image: StyleWithTheme<ImageStyle>;
    Switch: StyleWithTheme<ViewStyle>;
    TextInput: StyleWithTheme<ViewStyle>;
    H1: StyleWithTheme<TextStyle>;
    H2: StyleWithTheme<TextStyle>;
    H3: StyleWithTheme<TextStyle>;
    H4: StyleWithTheme<TextStyle>;
    H5: StyleWithTheme<TextStyle>;
    H6: StyleWithTheme<TextStyle>;
    Heading: StyleWithTheme<TextStyle>;
    Italic: StyleWithTheme<TextStyle>;
    Label: StyleWithTheme<TextStyle>;
    Strikethrough: StyleWithTheme<TextStyle>;
    Strong: StyleWithTheme<TextStyle>;
    Text: StyleWithTheme<TextStyle>;
    Underline: StyleWithTheme<TextStyle>;
    View: StyleWithTheme<ViewStyle>;
}

export interface Theme {
    config: {
        colorMode: 'auto' | 'light' | 'dark';
    };
    componentStyles: ComponentStyles;
    [key: string]: any; // to make it extendable
}

interface PartialTheme {
    config: {
        colorMode?: 'auto' | 'light' | 'dark';
    };
    componentStyles?: Partial<ComponentStyles>;
    [key: string]: any;
}

export interface ThemeProviderContext {
    theme: Theme;
    extractTheme?: (theme: Theme) => any;
}

const nonInteractableComponents: (keyof ComponentStyles)[] = [
    'ActivityIndicator',
    'Image',
    'TextInput',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'Heading',
    'Italic',
    'Label',
    'Strikethrough',
    'Strong',
    'Text',
    'Underline',
    'View',
];

const componentStyles = {
    ...Object.fromEntries(
        nonInteractableComponents.map(component => [
            component,
            {
                dark: {},
                light: {},
            },
        ]),
    ),
    Button: {
        dark: {
            _interactions: {
                _active: {},
                _hover: {},
                _focus: {},
            },
        },
        light: {
            _interactions: {
                _active: {},
                _hover: {},
                _focus: {},
            },
        },
    },
    TextInput: {
        dark: {
            _interactions: {
                _active: {},
                _hover: {},
                _focus: {},
            },
        },
        light: {
            _interactions: {
                _active: {},
                _hover: {},
                _focus: {},
            },
        },
    },
    Switch: {
        dark: {
            _interactions: {
                _active: {},
                _hover: {},
                _focus: {},
            },
        },
        light: {
            _interactions: {
                _active: {},
                _hover: {},
                _focus: {},
            },
        },
    },
};

const defaultThemeValue: Theme = {
    config: {
        colorMode: 'auto',
    },
    componentStyles: componentStyles as unknown as ComponentStyles,
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
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const extendTheme = (theme: Partial<PartialTheme>): Theme => {
    return merge(defaultThemeValue, theme);
};
