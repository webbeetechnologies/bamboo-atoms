import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './Strong';

export default {
    title: 'components/Strong',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    text: 'Strong Text',
};

Default.parameters = {
    docs: {
        source: {
            code: '<Strong>{text}</Strong>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
