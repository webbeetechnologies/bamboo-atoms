import React from 'react';
import {
    useComponents,
    ProvideTheme,
    extendTheme,
    useTheme,
    Theme,
    ComponentStyles,
    StyleWithTheme,
} from 'bamboo-shoots';
import Box from '../../components/Box';
import type { ViewStyle } from 'react-native';

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

    return (
        <Box alignItems="center">
            <Text>{JSON.stringify(providedTheme)}</Text>
        </Box>
    );
};

export const Example = (_props: Props) => {
    return (
        <ProvideTheme value={{ theme }}>
            <TextContainer />
        </ProvideTheme>
    );
};
