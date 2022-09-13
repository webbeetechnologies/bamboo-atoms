import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './ComponentsProvider';
import DocsPage from './ComponentsProvider.docs';

export default {
    title: 'core/ComponentsProvider',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    mode: 'contained',
};

Default.parameters = {
    docs: {
        page: DocsPage,
    },
};
