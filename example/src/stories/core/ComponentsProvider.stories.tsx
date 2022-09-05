import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Example } from './ComponentsProvider';

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
        source: {
            code: `
type InjectionComponents = {
    Button: typeof PaperButton;
};

const ButtonContainer = (props: Props) => {
    const { Button } = useComponents<InjectionComponents>();

    return (
        <Button {...props}>
            <Text>Injected Button</Text>
        </Button>
    );
};

export const Example = (props: Props) => {
    return (
        <ProvideComponents components={{ Button: PaperButton }}>
            <ButtonContainer {...props} />
        </ProvideComponents>
    );
};
            `,
            language: 'tsx',
            type: 'auto',
        },
    },
};
