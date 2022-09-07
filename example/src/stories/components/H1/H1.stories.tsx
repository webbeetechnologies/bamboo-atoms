import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './H1';

export default {
    title: 'components/H1',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    text: 'Heading 1',
};

Default.parameters = {
    docs: {
        source: {
            code: '<H1>{text}</H1>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
