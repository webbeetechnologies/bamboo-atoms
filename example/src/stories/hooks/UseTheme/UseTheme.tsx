import React from 'react';
import type { ViewStyle } from 'react-native';
import {
    useComponents,
    ProvideTheme,
    extendTheme,
    useTheme,
    ITheme,
    IComponentStyles,
    IStyleWithTheme,
} from 'bamboo-atoms';

export interface CustomTheme extends ITheme {
    primaryColor: string;
    componentStyles: IComponentStyles & {
        CustomButton: IStyleWithTheme<ViewStyle>;
    };
}

export type Props = {};

const theme = extendTheme({
    Text: {
        fontWeight: 'bold',

        dark: {
            color: '#fff',
        },
        light: {
            color: '#1977f2',
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
        <ProvideTheme theme={theme}>
            <TextContainer />
        </ProvideTheme>
    );
};
