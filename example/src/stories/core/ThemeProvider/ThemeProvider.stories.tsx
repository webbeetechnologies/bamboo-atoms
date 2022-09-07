import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './ThemeProvider';

export default {
    title: 'core/ThemeProvider',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {};

Default.parameters = {
    docs: {
        source: {
            code: `
            const theme = extendTheme({
    componentStyles: {
        View: {
            width: 100,
            height: 100,

            dark: {
                backgroundColor: '#fff',
            },
            light: {
                backgroundColor: '#f5f5f5',
            },
        },
        Text: {
            color: '#444',
        },
    },
});

export const Example = (props: Props) => {
    const { View, Text } = useComponents();

    return (
        <ProvideTheme value={{ theme }}>
            <View {...props}>
                <Text>Styles from the provider</Text>
            </View>
        </ProvideTheme>
    );
};
            `,
            language: 'tsx',
            type: 'auto',
        },
    },
};
