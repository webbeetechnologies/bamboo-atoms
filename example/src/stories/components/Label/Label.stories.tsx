import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { textArgTypes } from '../../common';
import { Example } from './Label';

export default {
    title: 'components/Label',
    component: Example,
    argTypes: textArgTypes,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    children: 'Label Text',
};

Default.parameters = {
    docs: {
        source: {
            code: '<Label>{children}</Label>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
