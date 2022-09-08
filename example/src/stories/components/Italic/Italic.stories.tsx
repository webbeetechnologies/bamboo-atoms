import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { textArgTypes } from '../../common';
import { Example } from './Italic';

export default {
    title: 'components/Italic',
    component: Example,
    argTypes: textArgTypes,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    children: 'Italic Text',
};

Default.parameters = {
    docs: {
        source: {
            code: '<Italic>{children}</Italic>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
