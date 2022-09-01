import React from 'react';
import { HeadingProps, useComponents } from 'bamboo-shoots';
import Box from '../../components/Box';

export type Props = HeadingProps & {
    text: string;
};

export const Example = ({ text, ...rest }: Props) => {
    const { Heading } = useComponents();

    return (
        <Box alignItems="center">
            <Heading {...rest}>{text}</Heading>
        </Box>
    );
};
