import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './ActivityIndicator';

export default {
    title: 'components/ActivityIndicator',
    component: Example,
    argTypes: {
        size: { control: 'number' },
        color: { control: 'color' },
        animating: { control: 'boolean' },
        hidesWhenStopped: { control: 'boolean' },
    },
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    size: 75,
    color: '#0000ff',
};

Default.parameters = {
    docs: {
        source: {
            code: '<ActivityIndicator {...props} />',
            language: 'tsx',
            type: 'auto',
        },
    },
};
