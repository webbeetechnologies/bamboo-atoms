import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './UseComponentTheme';

export default {
    title: 'hooks/useComponentTheme',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    componentName: 'Heading',
};

Default.parameters = {
    docs: {
        source: {
            code: `
// this will return a deepmarged theme obj
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
            `,
            language: 'tsx',
            type: 'auto',
        },
    },
};
