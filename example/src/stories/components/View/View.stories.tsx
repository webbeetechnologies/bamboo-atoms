import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './View';

export default {
    title: 'components/View',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {};

Default.parameters = {
    docs: {
        source: {
            code: '<View>{children}</View>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
