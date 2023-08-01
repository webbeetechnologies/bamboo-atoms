import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './LazyRegister';
import DocsPage from './LazyRegister.docs';

export default {
    title: 'core/LazyRegister',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {};

Default.parameters = {
    docs: {
        page: DocsPage,
    },
};
