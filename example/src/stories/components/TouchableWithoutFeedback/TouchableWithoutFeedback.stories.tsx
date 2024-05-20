import React from 'react';
import { Text } from 'react-native';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './TouchableWithoutFeedback';

export default {
    title: 'components/TouchableWithoutFeedback',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    children: <Text>Hello World</Text>,
    disabled: false,
};

Default.parameters = {
    docs: {
        source: {
            code: `
<TouchableWithoutFeedback>
    <Text>{text}</Text>
</TouchableWithoutFeedback>`,
            language: 'tsx',
            type: 'auto',
        },
    },
};
