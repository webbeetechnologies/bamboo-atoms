import React from 'react';
import {
    useComponents,
    ProvideTheme,
    ViewProps,
    extendTheme,
    IExtractThemeFuncArgs,
} from 'bamboo-shoots';

export type Props = ViewProps & {};

const customTheme = extendTheme({
    View: {
        width: 100,
        height: 100,

        dark: {
            backgroundColor: '#fff',
        },
        light: {
            backgroundColor: '#f5f5f5',
        },
    },
    Text: {
        color: '#444',
    },
});

const extractTheme = ({ theme, componentName, colorMode }: IExtractThemeFuncArgs) => {
    const { dark = {}, light = {}, ...rest } = theme[componentName];

    // to make Text only color: red
    return componentName === 'Text'
        ? { color: 'red' }
        : { ...rest, ...(colorMode === 'light' ? light : dark) };
};

export const Example = (props: Props) => {
    const { View, Text } = useComponents();

    return (
        <ProvideTheme theme={customTheme} extractTheme={extractTheme}>
            <View {...props}>
                <Text>Styles from the provider</Text>
            </View>
        </ProvideTheme>
    );
};
