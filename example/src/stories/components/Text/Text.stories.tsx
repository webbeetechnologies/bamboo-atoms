import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './Text';

export default {
    title: 'components/Text',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    children:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi asperiores at autem dignissimos eaque ipsam iure',
};
