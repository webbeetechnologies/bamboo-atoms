import React, { createContext, ReactNode, useContext, useMemo } from 'react';
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
} from '../../components';
import type { IComponentsProviderContext, IExtendComponentsTypes } from './types';

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

export const ComponentsContext = createContext<IComponentsProviderContext>(defaultComponents);

export const ProvideComponents = ({
    components,
    children,
}: {
    components: Partial<IComponentsProviderContext>;
    children: ReactNode;
}) => {
    const contextValue = useContext(ComponentsContext);

    const memoizedValue = useMemo(
        () => ({
            ...defaultComponents,
            ...components,
            ...(defaultComponents === contextValue ? components : contextValue),
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [components],
    );

    return (
        <ComponentsContext.Provider value={memoizedValue}>{children}</ComponentsContext.Provider>
    );
};

export const ConsumeComponents = <T,>({
    children,
}: {
    children: (comp: IExtendComponentsTypes<T>) => ReactNode;
}) => {
    // @ts-ignore
    return <ComponentsContext.Consumer>{children}</ComponentsContext.Consumer>;
};
