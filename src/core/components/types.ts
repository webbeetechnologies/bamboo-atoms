// to replace the properties of ComponentsProviderContext with the properties of T
import type { ComponentType } from 'react';
import type {
    ActivityIndicatorProps,
    ButtonProps,
    ImageProps,
    SwitchProps,
    TextInputProps,
    TextProps,
    ViewProps,
} from 'bamboo-shoots';
import type { NoInfer } from '../../types';

export type ExtendComponentsTypes<T> = Omit<DefaultComponents, keyof NoInfer<T>> & NoInfer<T>;

// TODO better type-checking
export interface DefaultComponents {
    ActivityIndicator: ComponentType<ActivityIndicatorProps> | ComponentType<any>;
    Button: ComponentType<ButtonProps> | ComponentType<any>;
    Image: ComponentType<ImageProps> | ComponentType<any>;
    Switch: ComponentType<SwitchProps> | ComponentType<any>;
    TextInput: ComponentType<TextInputProps> | ComponentType<any>;
    H1: ComponentType<TextProps> | ComponentType<any>;
    H2: ComponentType<TextProps> | ComponentType<any>;
    H3: ComponentType<TextProps> | ComponentType<any>;
    H4: ComponentType<TextProps> | ComponentType<any>;
    H5: ComponentType<TextProps> | ComponentType<any>;
    H6: ComponentType<TextProps> | ComponentType<any>;
    Heading: ComponentType<TextProps> | ComponentType<any>;
    Italic: ComponentType<TextProps> | ComponentType<any>;
    Label: ComponentType<TextProps> | ComponentType<any>;
    Strikethrough: ComponentType<TextProps> | ComponentType<any>;
    Strong: ComponentType<TextProps> | ComponentType<any>;
    Text: ComponentType<TextProps> | ComponentType<any>;
    Underline: ComponentType<TextProps> | ComponentType<any>;
    View: ComponentType<ViewProps> | ComponentType<any>;
}

export interface ComponentsProviderContext extends DefaultComponents {
    [key: string]: ComponentType<any>;
}
