import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './TextInput';

export default {
    title: 'components/TextInput',
    component: Example,
    argTypes: {
        allowFontScaling: { control: { type: 'boolean' } },
        autoCapitalize: {
            control: { type: 'select', options: ['none', 'sentences', 'words', 'characters'] },
        },
        autoCorrect: { control: { type: 'boolean' } },
        autoFocus: { control: { type: 'boolean' } },
        blurOnSubmit: { control: { type: 'boolean' } },
        caretHidden: { control: { type: 'boolean' } },
        contextMenuHidden: { control: { type: 'boolean' } },
        editable: { control: { type: 'boolean' } },
        maxLength: { control: { type: 'number' } },
        multiline: { control: { type: 'boolean' } },
        keyboardType: {
            control: {
                type: 'select',
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
