import React from 'react';
import { ProvideComponents, useComponents } from 'bamboo-shoots';
import { Button as PaperButton, ButtonProps } from 'react-native-paper';

export type Props = ButtonProps & {};

type InjectionComponents = {
    Button: typeof PaperButton;
};

const ButtonContainer = (props: Props) => {
    const { Button, Text } = useComponents<InjectionComponents>();

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
