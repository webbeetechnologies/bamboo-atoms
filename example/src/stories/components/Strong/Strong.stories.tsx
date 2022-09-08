import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { textArgTypes } from '../../common';
import { Example } from './Strong';

export default {
    title: 'components/Strong',
    component: Example,
    argTypes: textArgTypes,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    children: 'Strong Text',
};

Default.parameters = {
    docs: {
        source: {
            code: '<Strong>{children}</Strong>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
