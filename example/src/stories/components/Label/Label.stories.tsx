import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './Label';

export default {
    title: 'components/Label',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    text: 'Label Text',
};

Default.parameters = {
    docs: {
        source: {
            code: '<Label>{text}</Label>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
