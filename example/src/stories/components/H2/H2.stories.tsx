import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './H2';

export default {
    title: 'components/H2',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    text: 'Heading 2',
};

Default.parameters = {
    docs: {
        source: {
            code: '<H2>{text}</H2>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
