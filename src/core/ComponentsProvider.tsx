import React, { ComponentType, createContext, ReactNode } from 'react';
import {
    ActivityIndicator,
    Button,
    Image,
    Switch,
    TextInput,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Heading,
    Italic,
    Label,
    Strikethrough,
    Strong,
    Text,
    Underline,
    View,
} from '../components';
import type {
    ActivityIndicatorProps,
    ButtonProps,
    ImageProps,
    SwitchProps,
    TextInputProps,
    TextProps,
    ViewProps,
} from '../components';

// TODO better type-checking
export interface ComponentsProviderContext {
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

const defaultComponents = {
    ActivityIndicator: ActivityIndicator,
    Button: Button,
    Image: Image,
    Switch: Switch,
    TextInput: TextInput,
    H1: H1,
    H2: H2,
    H3: H3,
    H4: H4,
    H5: H5,
    H6: H6,
    Heading: Heading,
    Italic: Italic,
    Label: Label,
    Strikethrough: Strikethrough,
    Strong: Strong,
    Text: Text,
    Underline: Underline,
    View: View,
};

export const ComponentsContext = createContext<ComponentsProviderContext>(defaultComponents);

export const ProvideComponents = ({
    components,
    children,
}: {
    components: Partial<ComponentsProviderContext>;
    children: ReactNode;
}) => {
    const defaultContextValue = Object.assign({}, defaultComponents);

    // to avoid creating a new object
    Object.keys(components).forEach(key => {
        if (defaultContextValue[key as keyof ComponentsProviderContext]) {
            // @ts-ignore
            defaultContextValue[key] = components[key];
        }
    });

    return (
        <ComponentsContext.Provider value={defaultContextValue}>
            {children}
        </ComponentsContext.Provider>
    );
};

export const ConsumeComponents = ({
    children,
}: {
    children: (comp: ComponentsProviderContext) => ReactNode;
}) => {
    return <ComponentsContext.Consumer>{comp => children(comp)}</ComponentsContext.Consumer>;
};
