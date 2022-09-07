import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './H6';

export default {
    title: 'components/H6',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    text: 'Heading 6',
};

Default.parameters = {
    docs: {
        source: {
            code: '<H6>{text}</H6>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
