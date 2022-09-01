import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './Strikethrough';

export default {
    title: 'components/Strikethrough',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    text: 'This is is strike-through',
};

Default.parameters = {
    docs: {
        source: {
            code: '<Strikethrough>{text}</Strikethrough>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
