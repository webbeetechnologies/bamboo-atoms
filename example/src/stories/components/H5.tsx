import React from 'react';
import { H4Props, useComponents } from 'bamboo-shoots';
import Box from '../../components/Box';

export type Props = H4Props & {
    text: string;
};

export const Example = ({ text, ...rest }: Props) => {
    const { H4 } = useComponents();

    return (
        <Box alignItems="center">
            <H4 {...rest}>{text}</H4>
        </Box>
    );
};
