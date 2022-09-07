import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './Button';

export default {
    title: 'components/Button',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    text: 'Hello World',
    disabled: false,
};

Default.parameters = {
    docs: {
        source: {
            code: `
<Button>
    <Text>{text}</Text>
</Button>`,
            language: 'tsx',
            type: 'auto',
        },
    },
};
