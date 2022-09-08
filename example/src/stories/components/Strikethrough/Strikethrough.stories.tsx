import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { textArgTypes } from '../../common';
import { Example } from './Strikethrough';

export default {
    title: 'components/Strikethrough',
    component: Example,
    argTypes: textArgTypes,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    children: 'This is is strike-through',
};

Default.parameters = {
    docs: {
        source: {
            code: '<Strikethrough>{children}</Strikethrough>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
