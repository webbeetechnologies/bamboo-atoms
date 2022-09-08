import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { textArgTypes } from '../../common';
import { Example } from './H6';

export default {
    title: 'components/H6',
    component: Example,
    argTypes: textArgTypes,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    children: 'Heading 6',
};

Default.parameters = {
    docs: {
        source: {
            code: '<H6>{children}</H6>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
