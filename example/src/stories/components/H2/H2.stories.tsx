import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { textArgTypes } from '../../common';
import { Example } from './H2';

export default {
    title: 'components/H2',
    component: Example,
    argTypes: textArgTypes,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    children: 'Heading 2',
};

Default.parameters = {
    docs: {
        source: {
            code: '<H2>{children}</H2>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
