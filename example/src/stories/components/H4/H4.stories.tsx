import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './H4';

export default {
    title: 'components/H4',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    text: 'Heading 4',
};

Default.parameters = {
    docs: {
        source: {
            code: '<H4>{text}</H4>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
