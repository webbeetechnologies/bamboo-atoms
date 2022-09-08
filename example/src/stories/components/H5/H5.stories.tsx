import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { textArgTypes } from '../../common';
import { Example } from './H5';

export default {
    title: 'components/H5',
    component: Example,
    argTypes: textArgTypes,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    children: 'Heading 5',
};

Default.parameters = {
    docs: {
        source: {
            code: '<H5>{children}</H5>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
