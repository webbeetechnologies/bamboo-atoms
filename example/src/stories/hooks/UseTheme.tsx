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
        Heading: {
            width: 300,
            marginBottom: 50,

            dark: {
                backgroundColor: '#fff',
            },
            light: {
                backgroundColor: '#000',
            },
        },
    },
    primaryColor: '#007AFF',
});

export const Example = (_props: Props) => {
    const { Text } = useComponents();
    const providedTheme = useTheme<CustomTheme>();

    return (
        <ProvideTheme value={{ theme }}>
            <Box alignItems="center">
                <Text>{JSON.stringify(providedTheme)}</Text>
            </Box>
        </ProvideTheme>
    );
};
