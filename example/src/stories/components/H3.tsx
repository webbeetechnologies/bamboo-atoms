import React from 'react';
import { H3Props, useComponents } from 'bamboo-shoots';
import Box from '../../components/Box';

export type Props = H3Props & {
    text: string;
};

export const Example = ({ text, ...rest }: Props) => {
    const { H3 } = useComponents();

    return (
        <Box alignItems="center">
            <H3 {...rest}>{text}</H3>
        </Box>
    );
};
