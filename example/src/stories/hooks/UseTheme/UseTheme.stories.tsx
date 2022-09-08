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

export type Props = {};

const theme = extendTheme({
    componentStyles: {
        Text: {
            fontWeight: 'bold',

            dark: {
                color: '#fff',
            },
            light: {
                color: '#1977f2',
            },
        },
    },
    primaryColor: '#007AFF',
});

export const TextContainer = () => {
    const providedTheme = useTheme<CustomTheme>();
    const { Text } = useComponents();

    return (
        <Text>{JSON.stringify(providedTheme)}</Text>
    );
};

export const Example = (_props: Props) => {
    return (
        <ProvideTheme value={{ theme }}>
            <TextContainer />
        </ProvideTheme>
    );
};
            `,
            language: 'tsx',
            type: 'auto',
        },
    },
};
