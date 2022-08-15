import React, { createContext, FC, ReactNode, useContext } from 'react';
import type {
    ActivityIndicatorProps,
    ButtonProps,
    ImageProps,
    SwitchProps,
    TextInputProps,
    TextProps,
    ViewProps,
} from '../components';
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
};

export const ComponentsContext = createContext<ComponentsProviderContext>(defaultComponents);

export const useComponent = (componentName: keyof ComponentsProviderContext) => {
    const context = useContext(ComponentsContext);

    // @ts-ignore
    return context[componentName] as ComponentsProviderContext[componentName];
};

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
