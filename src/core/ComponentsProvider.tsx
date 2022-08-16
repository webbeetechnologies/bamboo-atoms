import React, { createContext, FC, ReactNode } from 'react';
import type {
    ActivityIndicatorProps,
    ButtonProps,
    ImageProps,
    SwitchProps,
    TextInputProps,
    TextProps,
    ViewProps,
} from '../components';

import { ActivityIndicatorDefault } from '../components/ActivityIndicator/ActivityIndicator';
import { ButtonDefault } from '../components/Button/Button';
import { ImageDefault } from '../components/Image/Image';
import { SwitchDefault } from '../components/Switch/Switch';
import { TextInputDefault } from '../components/TextInput/TextInput';
import { H1Default } from '../components/Typography/H1/H1';
import { H2Default } from '../components/Typography/H2/H2';
import { H3Default } from '../components/Typography/H3/H3';
import { H4Default } from '../components/Typography/H4/H4';
import { H5Default } from '../components/Typography/H5/H5';
import { H6Default } from '../components/Typography/H6/H6';
import { HeadingDefault } from '../components/Typography/Heading/Heading';
import { ItalicDefault } from '../components/Typography/Italic/Italic';
import { LabelDefault } from '../components/Typography/Label/Label';
import { StrikethroughDefault } from '../components/Typography/Strikethrough/Strikethrough';
import { StrongDefault } from '../components/Typography/Strong/Strong';
import { UnderlineDefault } from '../components/Typography/Underline/Underline';
import { TextDefault } from '../components/Typography/Text/Text';
import { ViewDefault } from '../components/View/View';

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
    ActivityIndicator: ActivityIndicatorDefault,
    Button: ButtonDefault,
    Image: ImageDefault,
    Switch: SwitchDefault,
    TextInput: TextInputDefault,
    H1: H1Default,
    H2: H2Default,
    H3: H3Default,
    H4: H4Default,
    H5: H5Default,
    H6: H6Default,
    Heading: HeadingDefault,
    Italic: ItalicDefault,
    Label: LabelDefault,
    Strikethrough: StrikethroughDefault,
    Strong: StrongDefault,
    Text: TextDefault,
    Underline: UnderlineDefault,
    View: ViewDefault,
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
