import React from 'react';
import { ProvideComponents, useComponents } from 'bamboo-atoms';
import { Button as PaperButton, ButtonProps } from 'react-native-paper';

export type Props = ButtonProps & {};

// For Paper components to work properly, we have to wrap all the components inside the Provider provided by the react-native-paper.
type InjectedComponents = {
    Button: typeof PaperButton;
};

const components = {
    Button: PaperButton,
};

const ButtonContainer = (props: Props) => {
    const { Button } = useComponents<InjectedComponents>();

    return (
        <Button onPress={() => {}} {...props}>
            Injected Button
        </Button>
    );
};

export const Example = (props: Props) => {
    return (
        <ProvideComponents components={components}>
            <ButtonContainer {...props} />
        </ProvideComponents>
    );
};
