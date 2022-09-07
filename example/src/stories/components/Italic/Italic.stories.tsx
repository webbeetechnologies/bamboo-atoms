import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './Italic';

export default {
    title: 'components/Italic',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    text: 'Italic Text',
};

Default.parameters = {
    docs: {
        source: {
            code: '<Italic>{text}</Italic>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
