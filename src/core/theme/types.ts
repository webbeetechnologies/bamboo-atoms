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
    [key: string]: IStyleWithTheme<ViewStyle | TextStyle | ImageStyle>; // all three possible styles
}

export type ColorMode = 'auto' | 'light' | 'dark';

export interface ITheme extends IComponentStyles {
    colorMode: ColorMode;
    setColorMode: (colorMode: ColorMode) => void;
    toggleColorMode: () => void;
    [key: string]: IStyleWithTheme<ViewStyle | TextStyle | ImageStyle> | any; // to make it extendable
}

export interface IExtractStylesFuncArgs {
    theme: ITheme;
    componentName: keyof IComponentStyles | string;
    colorMode: 'light' | 'dark';
    style: StyleProp<any>;
}

export type ThemeProviderContext = ITheme & {
    extractStyles: (args: IExtractStylesFuncArgs) => StyleProp<any>;
};

export interface ProvideThemeArgs {
    theme?: Partial<ITheme>;
    extractStyles?: (args: IExtractStylesFuncArgs) => StyleProp<any>;
    children: ReactNode;
}
