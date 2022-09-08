import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { textArgTypes } from '../../common';
import { Example } from './H4';

export default {
    title: 'components/H4',
    component: Example,
    argTypes: textArgTypes,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    children: 'Heading 4',
};

Default.parameters = {
    docs: {
        source: {
            code: '<H4>{children}</H4>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
