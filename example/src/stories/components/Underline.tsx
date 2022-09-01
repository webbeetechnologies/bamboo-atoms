import React from 'react';
import { UnderlineProps, useComponents } from 'bamboo-shoots';
import Box from '../../components/Box';

export type Props = UnderlineProps & {
    text: string;
};

export const Example = ({ text, ...rest }: Props) => {
    const { Underline } = useComponents();

    return (
        <Box alignItems="center">
            <Underline {...rest}>{text}</Underline>
        </Box>
    );
};
