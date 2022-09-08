import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './TextInput';

export default {
    title: 'components/TextInput',
    component: Example,
    argTypes: {
        allowFontScaling: { control: 'boolean' },
        autoCapitalize: {
            control: 'select',
            options: ['none', 'sentences', 'words', 'characters'],
        },
        autoCorrect: { control: 'boolean' },
        autoFocus: { control: 'boolean' },
        blurOnSubmit: { control: 'boolean' },
        caretHidden: { control: 'boolean' },
        contextMenuHidden: { control: 'boolean' },
        editable: { control: 'boolean' },
        maxLength: { control: 'number' },
        multiline: { control: 'boolean' },
        keyboardType: {
            control: 'select',
            options: [
                'default',
                'email-address',
                'numeric',
                'phone-pad',
                'number-pad',
                'decimal-pad',
                'ascii-capable',
                'numbers-and-punctuation',
                'url',
                'name-phone-pad',
                'twitter',
                'web-search',
                'visible-password',
            ],
            description: 'to set mobile keyboard types',
        },
    },
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
