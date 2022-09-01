import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './Image';

export default {
    title: 'components/Image',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    source: { uri: 'https://reactnative.dev/img/tiny_logo.png' },
};

Default.parameters = {
    docs: {
        source: {
            code: '<Image style={{ width: 50, height: 50 }} {...props} />',
            language: 'tsx',
            type: 'auto',
        },
    },
};
