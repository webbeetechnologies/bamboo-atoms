import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './Heading';

export default {
    title: 'components/Heading',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    text: 'Heading Text',
};

Default.parameters = {
    docs: {
        source: {
            code: '<Heading>{text}</Heading>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
