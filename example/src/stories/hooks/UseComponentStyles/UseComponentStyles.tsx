import React from 'react';
import { useComponents, useComponentStyles, ProvideTheme, extendTheme } from 'bamboo-shoots';

export type Props = {
    componentName: string;
};

const theme = extendTheme({
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
});

const TextContainer = ({ componentName }: { componentName: string }) => {
    const { Text } = useComponents();
    const componentStyles = useComponentStyles(componentName, {});

    return (
        <Text>
            {componentName}Theme: {JSON.stringify(componentStyles, null, 4)}
        </Text>
    );
};

export const Example = ({ componentName }: Props) => {
    return (
        <ProvideTheme theme={theme}>
            <TextContainer componentName={componentName} />
        </ProvideTheme>
    );
};
