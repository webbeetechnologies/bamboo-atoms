import React from 'react';
import type { ViewStyle } from 'react-native';
import {
    useComponents,
    ProvideTheme,
    extendTheme,
    useTheme,
    Theme,
    ComponentStyles,
    StyleWithTheme,
} from 'bamboo-shoots';

export interface CustomTheme extends Theme {
    primaryColor: string;
    componentStyles: ComponentStyles & {
        CustomButton: StyleWithTheme<ViewStyle>;
    };
}

export type Props = {};

const theme = extendTheme({
    componentStyles: {
        Text: {
            fontWeight: 'bold',

            dark: {
                color: '#fff',
            },
            light: {
                color: '#1977f2',
            },
        },
    },
    primaryColor: '#007AFF',
});

export const TextContainer = () => {
    const providedTheme = useTheme<CustomTheme>();
    const { Text } = useComponents();

    return <Text>{JSON.stringify(providedTheme, null, 4)}</Text>;
};

export const Example = (_props: Props) => {
    return (
        <ProvideTheme value={{ theme }}>
            <TextContainer />
        </ProvideTheme>
    );
};
