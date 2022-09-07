import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './UseMediaQuery';

export default {
    title: 'hooks/useMediaQuery',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    maxWidth: 400,
    orientation: 'portrait',
};

Default.parameters = {
    docs: {
        source: {
            code: `
    const { Text } = useComponents();
    const query = useMediaQuery(props);

    return (
        <Text>
            ...
            <Text style={{ color: 'blue', fontWeight: 'bold' }}>
                {query ? 'true' : 'false'}
            </Text>
        </Text>
    );
            `,
            language: 'tsx',
            type: 'auto',
        },
    },
};
