import React from 'react';
import { ButtonProps, useComponents } from 'bamboo-shoots';
import Box from '../../components/Box';

export type Props = ButtonProps & {
    text: string;
};

export const Example = ({ text, ...rest }: Props) => {
    const { Button, Text } = useComponents();

    return (
        <Box alignItems="center">
            <Button {...rest}>
                <Text>{text}</Text>
            </Button>
        </Box>
    );
};
