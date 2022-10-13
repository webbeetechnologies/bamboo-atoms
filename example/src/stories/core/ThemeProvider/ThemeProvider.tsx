import React from 'react';
import {
    useComponents,
    ProvideTheme,
    ViewProps,
    extendTheme,
    IExtractStylesFuncArgs,
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

const extractStyles = ({ theme, componentName, colorMode, style }: IExtractStylesFuncArgs) => {
    const { dark = {}, light = {}, ...rest } = theme[componentName] || {};

    // to make Text only color: red
    return componentName === 'Text'
        ? { color: 'red', ...style }
        : { ...rest, ...(colorMode === 'light' ? light : dark), ...style };
};

export const Example = (props: Props) => {
    const { View, Text } = useComponents();

    return (
        <ProvideTheme theme={customTheme} extractStyles={extractStyles}>
            <View {...props}>
                <Text>Styles from the provider</Text>
            </View>
        </ProvideTheme>
    );
};
