import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { textArgTypes } from '../../common';
import { Example } from './H3';

export default {
    title: 'components/H3',
    component: Example,
    argTypes: textArgTypes,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    children: 'Heading 3',
};

Default.parameters = {
    docs: {
        source: {
            code: '<H3>{children}</H3>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
