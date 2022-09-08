import type { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

export type StyleWithTheme<T> = StyleProp<T> & {
    dark?: StyleProp<T>;
    light?: StyleProp<T>;
};

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
    [key: string]: StyleWithTheme<ViewStyle | TextStyle | ImageStyle>; // all three possible styles
}

export interface Theme {
    config: {
        colorMode: 'auto' | 'light' | 'dark';
    };
    componentStyles: ComponentStyles;
    [key: string]: any; // to make it extendable
}

export interface PartialTheme {
    config: {
        colorMode?: 'auto' | 'light' | 'dark';
    };
    componentStyles?: Partial<ComponentStyles>;
    [key: string]: any;
}

export interface ExtractStylesFuncArgs {
    theme: Theme;
    componentName: keyof ComponentStyles;
    colorMode: 'light' | 'dark';
    defaultStyles: StyleProp<any>;
}

export interface ThemeProviderContext {
    theme: Theme;
    extractStyles?: (args: ExtractStylesFuncArgs) => StyleProp<any>;
}
