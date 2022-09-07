import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './Switch';

export default {
    title: 'components/Switch',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    trackColor: { false: '#767577', true: '#81b0ff' },
    ios_backgroundColor: '#3e3e3e',
};

Default.parameters = {
    docs: {
        source: {
            code: '<Switch {...props} />',
            language: 'tsx',
            type: 'auto',
        },
    },
};
