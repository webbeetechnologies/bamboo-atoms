import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './UseMediaQuery';
import DocsPage from './UseMediaQuery.docs';

export default {
    title: 'hooks/useMediaQuery',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    maxWidth: 400,
    orientation: 'portrait',
};

Default.parameters = {
    docs: {
        page: DocsPage,
    },
};
