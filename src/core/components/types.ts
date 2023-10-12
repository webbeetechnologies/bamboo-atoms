// to replace the properties of ComponentsProviderContext with the properties of T
import type { ComponentType } from 'react';
import type {
    ActivityIndicatorProps,
    ButtonProps,
    PressableProps,
    TouchableWithoutFeedbackProps,
    ImageProps,
    SwitchProps,
    TextInputProps,
    TextProps,
    ViewProps,
} from '../../components';
import type { NoInfer } from '../../types';

export type IExtendComponentsTypes<T> = Omit<
    DefaultComponents & BambooAtoms.Components,
    keyof NoInfer<T>
> &
    NoInfer<T>;

declare global {
    namespace BambooAtoms {
        interface Components {}
    }
}

// TODO better type-checking
export interface DefaultComponents {
    ActivityIndicator: ComponentType<ActivityIndicatorProps> | ComponentType<any>;
    Button: ComponentType<ButtonProps> | ComponentType<any>;
    Pressable: ComponentType<PressableProps> | ComponentType<any>;
    TouchableWithoutFeedback: ComponentType<TouchableWithoutFeedbackProps> | ComponentType<any>;
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

export interface IComponentsProviderContext extends DefaultComponents, BambooAtoms.Components {
    [key: string]: ComponentType<any>;
}
