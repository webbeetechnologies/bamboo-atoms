import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './TextInput';

export default {
    title: 'components/TextInput',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    placeholder: 'Please enter something',
};

Default.parameters = {
    docs: {
        source: {
            code: '<TextInput {...props} />',
            language: 'tsx',
            type: 'auto',
        },
    },
};
