import React from 'react';
import { useComponents, useComponentTheme, ProvideTheme, extendTheme } from 'bamboo-shoots';
import Box from '../../components/Box';

export type Props = {
    componentName: string;
};

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
});

export const Example = ({ componentName }: Props) => {
    const { Text } = useComponents();
    const componentTheme = useComponentTheme(componentName);

    return (
        <ProvideTheme value={{ theme }}>
            <Box alignItems="center">
                <Text>{JSON.stringify(componentTheme)}</Text>
            </Box>
        </ProvideTheme>
    );
};
