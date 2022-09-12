import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './UseComponentTheme';
import DocsPage from './UseComponentTheme.mdx';

export default {
    title: 'hooks/useComponentTheme',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {
    componentName: 'Heading',
};

Default.parameters = {
    docs: {
        page: DocsPage,
    },
};
