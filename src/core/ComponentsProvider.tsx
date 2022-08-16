import React, { createContext, FC, ReactNode } from 'react';
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
    ActivityIndicator: FC<ActivityIndicatorProps>;
    Button: FC<ButtonProps>;
    Image: FC<ImageProps>;
    Switch: FC<SwitchProps>;
    TextInput: FC<TextInputProps>;
    H1: FC<TextProps>;
    H2: FC<TextProps>;
    H3: FC<TextProps>;
    H4: FC<TextProps>;
    H5: FC<TextProps>;
    H6: FC<TextProps>;
    Heading: FC<TextProps>;
    Italic: FC<TextProps>;
    Label: FC<TextProps>;
    Strikethrough: FC<TextProps>;
    Strong: FC<TextProps>;
    Text: FC<TextProps>;
    Underline: FC<TextProps>;
    View: FC<ViewProps>;
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
    return (
        <ComponentsContext.Provider value={{ ...defaultComponents, ...components }}>
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
