import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './UseTheme';

export default {
    title: 'hooks/useTheme',
    component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStory<typeof Example> = args => <Example {...args} />;

Default.args = {};

Default.parameters = {
    docs: {
        source: {
            code: `
export interface CustomTheme extends Theme {
    primaryColor: string;
    componentStyles: ComponentStyles & {
        CustomButton: StyleWithTheme<ViewStyle>;
    };
}

// this will return a deepmarged theme obj
const theme = extendTheme({
    componentStyles: {
        Heading: {
            width: 300,
            marginBottom: 50,

            dark: {
                backgroundColor: '#fff'
            },
            light: {
                backgroundColor: '#000'
            }
        }
    },
    primaryColor: '#007AFF'
});

export const Example = (_props: Props) => {
    const { Text } = useComponents();
    const providedTheme = useTheme<CustomTheme>();

    return (
        <ProvideTheme value={{ theme }}>
            <Box alignItems="center">
                <Text>{JSON.stringify(providedTheme)}</Text>
            </Box>
        </ProvideTheme>
    );
};
            `,
            language: 'tsx',
            type: 'auto',
        },
    },
};
