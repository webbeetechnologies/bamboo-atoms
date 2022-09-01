import React from 'react';
import { ProvideComponents, useComponents } from 'bamboo-shoots';
import { Button as PaperButton, ButtonProps } from 'react-native-paper';
import Box from '../../components/Box';

export type Props = ButtonProps & {};

type InjectionComponents = {
    Button: typeof PaperButton;
};

const ButtonContainer = (props: Props) => {
    const { Button } = useComponents<InjectionComponents>();

    return (
        <Box alignItems="center">
            <Button {...props}>Injected Button</Button>
        </Box>
    );
};

export const Example = (props: Props) => {
    return (
        <ProvideComponents components={{ Button: PaperButton }}>
            <ButtonContainer {...props} />
        </ProvideComponents>
    );
};
