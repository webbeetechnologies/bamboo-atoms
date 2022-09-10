import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './Image';

export default {
    title: 'components/Image',
    component: Example,
    argTypes: {
        progressiveRenderingEnabled: { control: 'boolean' },
        borderRadius: { control: 'number' },
        borderTopLeftRadius: { control: 'number' },
        borderTopRightRadius: { control: 'number' },
        borderBottomLeftRadius: { control: 'number' },
        borderBottomRightRadius: { control: 'number' },
        resizeMode: {
            control: 'select',
            options: ['cover', 'contain', 'stretch', 'repeat', 'center'],
        },
        resizeMethod: { control: 'select', options: ['auto', 'resize', 'scale'] },
        loadingIndicatorSource: { control: 'object', },
        defaultSource: { control: 'object', },
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
