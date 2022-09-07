import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './H5';

export default {
    title: 'components/H5',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    text: 'Heading 5',
};

Default.parameters = {
    docs: {
        source: {
            code: '<H5>{text}</H5>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
