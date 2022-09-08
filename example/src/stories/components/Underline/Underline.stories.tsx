import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { textArgTypes } from '../../common';
import { Example } from './Underline';

export default {
    title: 'components/Underline',
    component: Example,
    argTypes: textArgTypes,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    children: 'Underlined Text',
};

Default.parameters = {
    docs: {
        source: {
            code: '<Underline>{children}</Underline>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
