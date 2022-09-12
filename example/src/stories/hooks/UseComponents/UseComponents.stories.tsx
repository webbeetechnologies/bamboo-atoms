import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './UseComponents';
import DocsPage from './UseComponents.mdx';

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
        <>
            <Text>Text Component</Text>
            <Button>
                <Text>Button Component</Text>
            </Button>
        </>
    );
            `,
            language: 'tsx',
            type: 'auto',
        },
        page: DocsPage,
    },
};
