import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './UseComponents';

export default {
    title: 'hooks/useComponents',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {};

Default.parameters = {
    docs: {
        source: {
            code: `
    const { Text, Button } = useComponents();

    return (
        <Box alignItems="center">
            <Text>Text Component</Text>
            <Button>
                <Text>Button Component</Text>
            </Button>
        </Box>
    );
            `,
            language: 'tsx',
            type: 'auto',
        },
    },
};
