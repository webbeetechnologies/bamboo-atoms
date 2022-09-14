import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './Image';

export default {
    title: 'components/Image',
    component: Example,
    argTypes: {
        progressiveRenderingEnabled: { control: { type: 'boolean' } },
        borderRadius: { control: { type: 'number' } },
        borderTopLeftRadius: { control: { type: 'number' } },
        borderTopRightRadius: { control: { type: 'number' } },
        borderBottomLeftRadius: { control: { type: 'number' } },
        borderBottomRightRadius: { control: { type: 'number' } },
        resizeMode: {
            control: {
                type: 'select',
                options: ['cover', 'contain', 'stretch', 'repeat', 'center'],
            },
        },
        resizeMethod: { control: { type: 'select', options: ['auto', 'resize', 'scale'] } },
        loadingIndicatorSource: { control: { type: 'object' } },
        defaultSource: { control: { type: 'object' } },
    },
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
