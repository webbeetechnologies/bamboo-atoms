import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { textArgTypes } from '../../common';
import { Example } from './H1';

export default {
    title: 'components/H1',
    component: Example,
    argTypes: textArgTypes,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    children: 'Heading 1',
};

Default.parameters = {
    docs: {
        source: {
            code: '<H1>{children}</H1>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
