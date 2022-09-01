import React from 'react';
import { ItalicProps, useComponents } from 'bamboo-shoots';
import Box from '../../components/Box';

export type Props = ItalicProps & {
    text: string;
};

export const Example = ({ text, ...rest }: Props) => {
    const { Italic } = useComponents();

    return (
        <Box alignItems="center">
            <Italic {...rest}>{text}</Italic>
        </Box>
    );
};
