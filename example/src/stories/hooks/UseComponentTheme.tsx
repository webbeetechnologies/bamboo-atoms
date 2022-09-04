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
                color: '#fff',
            },
            light: {
                color: '#000',
            },
        },
    },
});

const TextContainer = ({ componentName }: { componentName: string }) => {
    const { Text } = useComponents();
    const componentTheme = useComponentTheme(componentName);

    return (
        <Box alignItems="center">
            <Text>
                {componentName}Theme: {JSON.stringify(componentTheme)}
            </Text>
        </Box>
    );
};

export const Example = ({ componentName }: Props) => {
    return (
        <ProvideTheme value={{ theme }}>
            <TextContainer componentName={componentName} />
        </ProvideTheme>
    );
};
