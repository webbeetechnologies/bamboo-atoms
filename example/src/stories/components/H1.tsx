import React from 'react';
import { H1Props, useComponents } from 'bamboo-shoots';
import Box from '../../components/Box';

export type Props = H1Props & {
    text: string;
};

export const Example = ({ text, ...rest }: Props) => {
    const { H1 } = useComponents();

    return (
        <Box alignItems="center">
            <H1 {...rest}>{text}</H1>
        </Box>
    );
};
