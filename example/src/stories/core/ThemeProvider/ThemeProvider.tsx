import React from 'react';
import { useComponents, ProvideTheme, ViewProps, extendTheme } from 'bamboo-shoots';

export type Props = ViewProps & {};

const theme = extendTheme({
    componentStyles: {
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
    },
});

export const Example = (props: Props) => {
    const { View, Text } = useComponents();

    return (
        <ProvideTheme value={{ theme }}>
            <View {...props}>
                <Text>Styles from the provider</Text>
            </View>
        </ProvideTheme>
    );
};
