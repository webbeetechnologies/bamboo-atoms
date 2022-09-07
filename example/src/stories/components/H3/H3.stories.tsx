import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './H3';

export default {
    title: 'components/H3',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    text: 'Heading 3',
};

Default.parameters = {
    docs: {
        source: {
            code: '<H3>{text}</H3>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
