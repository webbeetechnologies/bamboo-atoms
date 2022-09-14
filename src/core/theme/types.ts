import type { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { ReactNode } from 'react';

export type IStyleWithTheme<T> = StyleProp<T> & {
    dark?: StyleProp<T>;
    light?: StyleProp<T>;
    [key: string]: any; // to be extendable // can be Style, string, number, boolean
};

export interface IComponentStyles {
    ActivityIndicator: IStyleWithTheme<ViewStyle>;
    Button: IStyleWithTheme<ViewStyle>;
    Image: IStyleWithTheme<ImageStyle>;
    Switch: IStyleWithTheme<ViewStyle>;
    TextInput: IStyleWithTheme<ViewStyle>;
    H1: IStyleWithTheme<TextStyle>;
    H2: IStyleWithTheme<TextStyle>;
    H3: IStyleWithTheme<TextStyle>;
    H4: IStyleWithTheme<TextStyle>;
    H5: IStyleWithTheme<TextStyle>;
    H6: IStyleWithTheme<TextStyle>;
    Heading: IStyleWithTheme<TextStyle>;
    Italic: IStyleWithTheme<TextStyle>;
    Label: IStyleWithTheme<TextStyle>;
    Strikethrough: IStyleWithTheme<TextStyle>;
    Strong: IStyleWithTheme<TextStyle>;
    Text: IStyleWithTheme<TextStyle>;
    Underline: IStyleWithTheme<TextStyle>;
    View: IStyleWithTheme<ViewStyle>;
    // [key: string]: StyleWithTheme<ViewStyle | TextStyle | ImageStyle>; // all three possible styles
}

export type ITheme = IComponentStyles & {
    colorMode: 'auto' | 'light' | 'dark';
    [key: string]: any; // to make it extendable
};

export interface IExtractStylesFuncArgs {
    theme: ITheme;
    componentName: keyof IComponentStyles | string;
    colorMode: 'light' | 'dark';
}

export type ThemeProviderContext = ITheme & {
    extractStyles: (args: IExtractStylesFuncArgs) => StyleProp<any>;
};

export interface ProvideThemeArgs {
    theme?: Partial<ITheme>;
    extractStyles?: (args: IExtractStylesFuncArgs) => StyleProp<any>;
    children: ReactNode;
}
