import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { textArgTypes } from '../../common';
import { Example } from './Heading';

export default {
    title: 'components/Heading',
    component: Example,
    argTypes: textArgTypes,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    children: 'Heading Text',
};

Default.parameters = {
    docs: {
        source: {
            code: '<Heading>{children}</Heading>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
