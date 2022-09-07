import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './Underline';

export default {
    title: 'components/Underline',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    text: 'Underlined Text',
};

Default.parameters = {
    docs: {
        source: {
            code: '<Underline>{text}</Underline>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
