import React from 'react';
import { ButtonProps, useComponents } from 'bamboo-shoots';

export type Props = ButtonProps & {
    text: string;
};

export const Example = ({ text, ...rest }: Props) => {
    const { Button, Text } = useComponents();

    return (
        <Button {...rest}>
            <Text>{text}</Text>
        </Button>
    );
};
