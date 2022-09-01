import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './UseComponentTheme';

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
        source: {
            code: `
// this will return a deepmarged theme obj
const theme = extendTheme({
    componentStyles: {
        Heading: {
            width: 300,
            marginBottom: 50,

            dark: {
                backgroundColor: '#fff',
            },
            light: {
                backgroundColor: '#000',
            }
        }
    }
});

export const Example = ({ componentName }: Props) => {
    const componentTheme = useComponentTheme(componentName);

    return (
        <ProvideTheme value={{ theme }}>
            {children}
        </ProvideTheme>
    );
    
}
            `,
            language: 'tsx',
            type: 'auto',
        },
    },
};
